import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, SignInInterface } from 'src/app/model/AuthInterface';
import { API } from 'src/app/utils/API';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private http: HttpClient) { }

  public editProfile(payload: SignInInterface) {
    return this.http.post<LoginResponse>(
      environment.baseURL + API.EDITPROFILE,
      payload
    );
  }

  public getProfile(phone_number: string) {
    return this.http.post<LoginResponse>(
      environment.baseURL + API.PROFILE,
      {phone_number}
    );
  }

}
