import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RecentChatInterface } from 'src/app/model/RecentChatInterface';
import { DataService } from 'src/app/services/data-service/data.service';
import { map, Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormControlConst } from 'src/app/utils/FormControlsConst.types';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { ProfileInterface } from 'src/app/model/AuthInterface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  public conversation$!: Observable<RecentChatInterface>;
  public showEmojiPicker = false;
  public showSendArrow = false;
  public form!: FormGroup;
  public readonly formControlConst = FormControlConst;
  private profileData: ProfileInterface | undefined;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private chatService: ChatService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.dataService.clearData();
  }

  ngOnInit(): void {
    this.createForm();
    this.conversation$ = this.dataService.getData().pipe(
      map((res) => {
        return res;
      })
    );
    this.dataService.getData();
    this.profileData = localStorage.getItem('isLoggedIn')
      ? JSON.parse(localStorage.getItem('isLoggedIn')!)
      : '';
  }

  public createForm() {
    this.form = this.fb.group({
      [this.formControlConst.SEND_MESSAGE]: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
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

  public sendMessage(conversation: RecentChatInterface) {
    if (this.form.valid) {
      const payload = {
        sender_id: this.profileData?.id,
        receiver_id: conversation.id,
        last_message_timestamp: '1232131',
      };
      this.chatService.createConversation(payload).subscribe((res) => {
        console.log(res);
      });
    }
  }

  public deleteChat(conversation: RecentChatInterface) {
    const payload = {
      sender_id: this.profileData?.id,
      receiver_id: conversation.id,
    };
    this.chatService.deleteConversation(payload).subscribe((res) => {
      if (res.data) {
        console.log(res);
        this.router.navigate(
          [''],
          { skipLocationChange: true }
        );
      }
    });
  }
}
