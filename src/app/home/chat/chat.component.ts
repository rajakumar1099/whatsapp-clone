import { Component, Input, OnInit } from '@angular/core';
import { RecentChatInterface } from 'src/app/model/RecentChatInterface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation: RecentChatInterface | undefined;
  public showEmojiPicker = false;
  public recentChatList: RecentChatInterface[] | undefined;
  constructor() {}

  ngOnInit(): void {}

  public toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  public addEmoji(event: any) {
    console.log(event);
  }

}
