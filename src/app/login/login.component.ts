import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isSignUpEnabled: boolean = false;
  public form!: FormGroup
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')])
    })
  }

  public toggleSignUp() {
    this.isSignUpEnabled = !this.isSignUpEnabled;
  }

  public login() {
    console.log(this.form.valid);
  }
}
