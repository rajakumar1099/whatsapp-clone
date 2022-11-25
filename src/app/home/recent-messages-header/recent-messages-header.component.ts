import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileInterface } from 'src/app/model/AuthInterface';

@Component({
  selector: 'app-recent-messages-header',
  templateUrl: './recent-messages-header.component.html',
  styleUrls: ['./recent-messages-header.component.scss'],
})
export class RecentMessagesHeaderComponent implements OnInit {
  public filterTerm!: string;
  public profileData: ProfileInterface | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.profileData = localStorage.getItem('isLoggedIn')
      ? JSON.parse(localStorage.getItem('isLoggedIn')!)
      : '';
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/login'], {skipLocationChange: true});
  }
  public openNewChat() {
    this.router.navigate(['/new-chat'], {skipLocationChange: true});
  }
  public openEditProfile() {
    this.router.navigate(['/edit-profile'], {skipLocationChange: true});
  }
}
