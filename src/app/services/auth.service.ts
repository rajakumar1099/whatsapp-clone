import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { API } from '../utils/API';
import {
  LoginInterface,
  LoginResponse,
  SignInInterface,
  SignInResponse,
} from '../model/AuthInterface';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(payload: LoginInterface) {
    return this.http.post<LoginResponse>(
      environment.baseURL + API.LOGIN,
      payload
    );
  }

  public signIn(payload: SignInInterface) {
    return this.http.post<SignInResponse>(
      environment.baseURL + API.SIGNUP,
      payload
    );
  }

  public errorHandler(error: HttpErrorResponse) {
    return new Error(error.message || 'server error.');
  }
}
