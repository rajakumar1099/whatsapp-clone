import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecentChatInterface } from 'src/app/model/RecentChatInterface';

@Component({
  selector: 'app-recent-message-items',
  templateUrl: './recent-message-items.component.html',
  styleUrls: ['./recent-message-items.component.scss'],
})
export class RecentMessageItemsComponent implements OnInit {
  @Input() recentChatData: RecentChatInterface[] | undefined
  @Output() onChatItemSelect: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onChatSelected(data: any) {
    this.onChatItemSelect.emit(data);
  }
}
