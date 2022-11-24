import { Component, OnInit } from '@angular/core';
import { RecentChatInterface } from '../model/RecentChatInterface';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public conversation: any;
  public recentChatList: RecentChatInterface[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.loadChatList();
  }

  public onConversationSelected(event: any) {
    this.conversation = event;
  }

  public loadChatList() {
    this.recentChatList = [
      {
        id: 1,
        display_name: 'Rajakumar-Jio',
        phone_number: '+91-9876543210',
        profile_image:
          '',
      },
      {
        id: 2,
        display_name: 'Vikram',
        phone_number: '+91-9876543210',
        profile_image:
          '',
      },
      {
        id: 3,
        display_name: 'Jessy',
        phone_number: '+91-9876543210',
        profile_image:
          '',
      },
      {
        id: 4,
        display_name: 'Karthik',
        phone_number: '+91-9876543210',
        profile_image:
          '',
      },
      {
        id: 5,
        display_name: 'Viky',
        phone_number: '+91-9876543210',
        profile_image:
          '',
      },
      {
        id: 6,
        display_name: 'Sasi',
        phone_number: '+91-9876543210',
        profile_image:
          '',
      },
    ];
  }
}
