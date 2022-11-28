import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import {
  LoginResponse,
  ProfileInterface,
  SignInInterface,
} from 'src/app/model/AuthInterface';
import { EditProfileService } from 'src/app/services/edit-profile/edit-profile.service';
import { FileService } from 'src/app/services/FileService/file.service';
import { FormControlConst } from 'src/app/utils/FormControlsConst.types';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  private image!: any;
  private subs = new Subscription();
  private profileData: ProfileInterface | undefined;
  public isEditMode: boolean = false;
  public isEditBio: boolean = false;
  public form!: FormGroup;
  public editProfile: LoginResponse | undefined;
  public readonly formControlName = FormControlConst;
  constructor(
    private editProfileService: EditProfileService,
    private fileService: FileService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    this.profileData = localStorage.getItem('isLoggedIn')
      ? JSON.parse(localStorage.getItem('isLoggedIn')!)
      : '';
    this.subs.add(
      this.editProfileService
        .getProfile(this.profileData?.phone_number!)
        .subscribe((res: LoginResponse) => {
          this.setFormValues(res?.data!);
          this.editProfile = res;
        })
    );
  }

  public createForm() {
    this.form = this.fb.group({
      [FormControlConst.PROFILE_NAME]: new FormControl([
        '',
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern("^[a-zA-Z -']+"),
      ]),
      [FormControlConst.PROFILE_BIO]: new FormControl([
        '',
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3),
        Validators.pattern("^[a-zA-Z -']+"),
      ]),
    });
  }

  public setFormValues(value: ProfileInterface) {
    this.form.controls[FormControlConst.PROFILE_NAME].setValue(
      value.display_name
    );
    this.form.controls[FormControlConst.PROFILE_BIO].setValue(value.bio);
  }

  public onFileSelect(event: any) {
    if (event.target.files.length) {
      this.image = event.target.files[0];
      const formData = new FormData();
      formData.append('id', this.profileData?.id!);
      formData.append('image_name', 'profile');
      formData.append('image', this.image);
      this.subs.add(
        this.fileService
          .editProfileImage(formData)
          .pipe(
            mergeMap((value: any) => {
              this.profileData = localStorage.getItem('isLoggedIn')
                ? JSON.parse(localStorage.getItem('isLoggedIn')!)
                : '';
              const payload: SignInInterface = {
                display_name: this.profileData?.display_name!,
                phone_number: this.profileData?.phone_number!,
                profile_image: value?.image,
                bio: this.profileData?.bio!,
              };
              return this.editProfileService.editProfile(payload);
            })
          )
          .subscribe((res) => {
            this.editProfile = res;
            localStorage.setItem('isLoggedIn', JSON.stringify(res.data));
          })
      );
    }
  }

  public setEditProfile() {
    if (
      this.form.controls[FormControlConst.PROFILE_NAME].dirty ||
      this.form.controls[FormControlConst.PROFILE_BIO].dirty
    ) {
      this.profileData = localStorage.getItem('isLoggedIn')
        ? JSON.parse(localStorage.getItem('isLoggedIn')!)
        : '';
      const payload: SignInInterface = {
        phone_number: this.profileData?.phone_number!,
        display_name: this.form.controls[FormControlConst.PROFILE_NAME].value,
        profile_image: this.profileData?.profile_image!,
        bio: this.form.controls[FormControlConst.PROFILE_BIO].value,
      };
      this.subs.add(
        this.editProfileService
          .editProfile(payload)
          .subscribe((res: LoginResponse) => {
            this.editProfile = res;
            this.setFormValues(res?.data!);
          })
      );
    }
  }

  public editToggle() {
    this.isEditMode = !this.isEditMode;
    this.setEditProfile();
  }

  public editBio() {
    this.isEditBio = !this.isEditBio;
    this.setEditProfile();
  }

  public back() {
    this.router.navigate(['/'])
  }
}
