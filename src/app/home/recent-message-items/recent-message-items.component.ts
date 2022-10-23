import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recent-message-items',
  templateUrl: './recent-message-items.component.html',
  styleUrls: ['./recent-message-items.component.scss'],
})
export class RecentMessageItemsComponent implements OnInit {
  public data: string = 'test';
  @Output() onChatItemSelect: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onChatSelected() {
    this.onChatItemSelect.emit(this.data);
    console.log(this.onChatItemSelect);
  }
}
