import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/utils/API';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}
  public editProfileImage(payload: FormData) {
    return this.http.post(
      environment.baseURL + API.UPLOADIMAGE,
      payload
    );
  }
}
