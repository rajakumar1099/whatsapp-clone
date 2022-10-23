import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public conversation: any;
  constructor() {}

  ngOnInit(): void {}

  public onConversationSelected(event: any) {
    this.conversation = event;
  }
}
