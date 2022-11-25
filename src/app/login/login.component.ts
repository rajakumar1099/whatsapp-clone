import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { FormControlConst } from '../utils/FormControlsConst.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public isSignUp: boolean = false;
  public form!: FormGroup;
  private subs = new Subscription();
  public readonly formControlConst = FormControlConst;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      [this.formControlConst.DISPLAYNAME]: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ])
      ),
      [this.formControlConst.PHONENUMBER]: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(10),
          Validators.pattern('^[0-9]*$'),
        ])
      ),
    });
    this.form?.controls[this.formControlConst.DISPLAYNAME]?.setValidators(null);
  }

  public toggleSignUp() {
    this.form?.reset();
    if (this.isSignUp) {
      this.form?.controls[this.formControlConst.DISPLAYNAME]?.setValidators(
        null
      );
    } else {
      this.form?.controls[this.formControlConst.DISPLAYNAME]?.setValidators([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(4),
        Validators.pattern("^[a-zA-Z -']+"),
      ]);
    }
    this.form?.controls[
      this.formControlConst.DISPLAYNAME
    ]?.updateValueAndValidity();
    this.isSignUp = !this.isSignUp;
  }

  public login() {
    if (this.form?.valid) {
      this.isSignUp ? this.requestSignin() : this.requestLogin();
    }
  }

  public showFormError(controlName: string, message?: string): string {
    if (this.form?.controls[controlName]?.hasError('required')) {
      return 'This field is required';
    } else if (this.form?.controls[controlName]?.hasError('minlength')) {
      return (
        'This minimum length of this field is ' +
        (controlName === this.formControlConst.PHONENUMBER ? '10 ' : '4 ') +
        'characters'
      );
    } else if (this.form?.controls[controlName]?.hasError('pattern')) {
      return (controlName === this.formControlConst.PHONENUMBER ? 'This field accepts the numbers' : 'This field accepts the valid alphabets');
    } else if (this.form?.controls[controlName]?.hasError('maxlength')) {
      return (
        'This maximum length of this field is ' +
        (controlName === this.formControlConst.PHONENUMBER ? '10 ' : '20 ') +
        'characters'
      );
    } else if (message) {
      return message;
    } else {
      return '';
    }
  }

  public requestSignin() {
    const payload = {
      display_name:
        this.form?.controls[
          this.formControlConst.DISPLAYNAME
        ]?.value.toString(),
      phone_number:
        this.form?.controls[
          this.formControlConst.PHONENUMBER
        ]?.value.toString(),
    };
    this.subs.add(
      this.authService.signIn(payload).subscribe((res) => {
        if (!res.message) {
          localStorage.setItem('isLoggedIn', JSON.stringify(res.data));
          this.router.navigate(['']);
        } else {
          this.showFormError(FormControlConst.PHONENUMBER, res.message)
        }
      })
    );
  }

  public requestLogin() {
    const payload = {
      phone_number:
        this.form?.controls[
          this.formControlConst.PHONENUMBER
        ]?.value.toString(),
    };
    this.subs.add(
      this.authService.login(payload).subscribe((res) => {
        if (!res.message) {
          localStorage.setItem('isLoggedIn', JSON.stringify(res.data));
          this.router.navigate(['']);
        } else {
          this.showFormError(FormControlConst.PHONENUMBER, res.message)
        }
      })
    );
  }
}
