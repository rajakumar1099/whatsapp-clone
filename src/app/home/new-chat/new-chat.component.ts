import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import {
  ProfileInterface,
  ProfilesResponse,
} from 'src/app/model/AuthInterface';
import { DataService } from 'src/app/services/data-service/data.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss'],
})
export class NewChatComponent implements OnInit {
  public getProfiles$: Observable<ProfilesResponse> | undefined;
  private profileData: ProfileInterface | undefined;
  public filterTerm!: string;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.profileData = localStorage.getItem('isLoggedIn')
      ? JSON.parse(localStorage.getItem('isLoggedIn')!)
      : '';
    this.getProfiles$ = this.profileService.getProfiles().pipe(
      map((res) => {
        var value = res;
        value.data.forEach((element, index) => {
          if (value.data[index].id === this.profileData?.id) {
            value.data.splice(index, 1);
          }
        });
        return value;
      })
    );
  }

  public openChat(data: any) {
    console.log(data);

    this.dataService.sendData(data);
    this.router.navigate(
      [
        {
          outlets: { right: ['chat'] },
        },
      ],
      { skipLocationChange: true }
    );
  }
}
