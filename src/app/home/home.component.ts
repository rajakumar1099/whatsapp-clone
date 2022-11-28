import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';
import { ProfileInterface, ProfilesResponse } from '../model/AuthInterface';
import { ChatService } from '../services/chat-service/chat.service';
import { StorageService } from '../services/storage/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public conversation: any;
  public recentChatList: ProfileInterface[] = [];
  private profileData: ProfileInterface | undefined;
  private subs = new Subscription();
  constructor(
    private storageService: StorageService,
    private chatService: ChatService,
    private router: Router,
  ) {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.profileData = localStorage.getItem('isLoggedIn')
      ? JSON.parse(localStorage.getItem('isLoggedIn')!)
      : '';
    this.loadChatList();
    this.subs.add(
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)
      ).subscribe((value: any) => {
        if(value.url === '/') {
          this.loadChatList()
        }
       })


    );
  }

  public onConversationSelected(event: any) {
    this.conversation = event;
  }

  public loadChatList() {
    this.chatService.getConversation(this.profileData?.id!).subscribe((res) => {
      this.recentChatList = []
      res.data.forEach((element) => {
        this.recentChatList?.push(element);
      });
    });
  }
}
