import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilesResponse } from 'src/app/model/AuthInterface';
import { API } from 'src/app/utils/API';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  public createConversation(payload: any) {
    return this.http.post(
      environment.baseURL + API.CREATECONVERSATIONS,
      payload
    );
  }

  public getConversation(sender_id: string) {
    return this.http.post<ProfilesResponse>(
      environment.baseURL + API.GETCONVERSATIONS,
      {sender_id}
    );
  }

  public deleteConversation(payload: any) {
    return this.http.post<any>(
      environment.baseURL + API.DELETECONVERSATIONS,
      payload
    );
  }
}
