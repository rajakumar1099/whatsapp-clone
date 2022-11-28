import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileInterface } from 'src/app/model/AuthInterface';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-recent-message-items',
  templateUrl: './recent-message-items.component.html',
  styleUrls: ['./recent-message-items.component.scss'],
})
export class RecentMessageItemsComponent implements OnInit {
  public filterTerm!: string;
  @Input() recentChatData: ProfileInterface[] = [];
  constructor(
    private router: Router,
    private dataService: DataService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {}

  public onChatSelected(data: any) {
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
