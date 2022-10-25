import { Component, OnInit } from '@angular/core';
import { RecentChatInterface } from '../model/RecentChatInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public conversation: any;
  public recentChatList: RecentChatInterface[] = [];
  constructor() {}

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
        displayName: 'Rajakumar-Jio',
        number: '+91-9876543210',
        displayProfileImage:
          'https://pps.whatsapp.net/v/t61.24694-24/290889392_5535802236431875_5364001910112459034_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTyAvc2kikWkYtMcBzGsjCDcVLJypIF6301_N5Kh9k1wQ&oe=63636D2A',
      },
      {
        id: 2,
        displayName: '',
        number: '+91-9876543210',
        displayProfileImage:
          'https://pps.whatsapp.net/v/t61.24694-24/290889392_5535802236431875_5364001910112459034_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTyAvc2kikWkYtMcBzGsjCDcVLJypIF6301_N5Kh9k1wQ&oe=63636D2A',
      },
      {
        id: 3,
        displayName: 'Jessy',
        number: '+91-9876543210',
        displayProfileImage:
          'https://pps.whatsapp.net/v/t61.24694-24/290889392_5535802236431875_5364001910112459034_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTyAvc2kikWkYtMcBzGsjCDcVLJypIF6301_N5Kh9k1wQ&oe=63636D2A',
      },
      {
        id: 4,
        displayName: 'Karthik',
        number: '+91-9876543210',
        displayProfileImage:
          'https://pps.whatsapp.net/v/t61.24694-24/290889392_5535802236431875_5364001910112459034_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTyAvc2kikWkYtMcBzGsjCDcVLJypIF6301_N5Kh9k1wQ&oe=63636D2A',
      },
      {
        id: 5,
        displayName: 'Viky',
        number: '+91-9876543210',
        displayProfileImage:
          'https://pps.whatsapp.net/v/t61.24694-24/290889392_5535802236431875_5364001910112459034_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTyAvc2kikWkYtMcBzGsjCDcVLJypIF6301_N5Kh9k1wQ&oe=63636D2A',
      },
      {
        id: 6,
        displayName: 'Sasi',
        number: '+91-9876543210',
        displayProfileImage:
          'https://pps.whatsapp.net/v/t61.24694-24/290889392_5535802236431875_5364001910112459034_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTyAvc2kikWkYtMcBzGsjCDcVLJypIF6301_N5Kh9k1wQ&oe=63636D2A',
      },
    ];
  }
}
