import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecentChatInterface } from 'src/app/model/RecentChatInterface';
import { DataService } from 'src/app/services/data-service/data.service';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  public conversation$!: Observable<RecentChatInterface>;
  public showEmojiPicker = false;
  public showSendArrow = false;
  constructor(private dataService: DataService) {}
  ngOnDestroy(): void {
    this.dataService.clearData();
  }

  ngOnInit(): void {
    this.conversation$ = this.dataService.getData().pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    );
    this.dataService.getData();
  }

  public onSearchChange(event: any) {
    this.showSendArrow = event?.data ? true : false;
  }

  public toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  public addEmoji(event: any) {
    console.log(event);
  }
}
