import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, ProfilesResponse } from 'src/app/model/AuthInterface';
import { API } from 'src/app/utils/API';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getProfiles() {
    return this.http.get<ProfilesResponse>(
      environment.baseURL + API.GETPROFILES
    );
  }
}
