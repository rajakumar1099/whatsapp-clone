import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecentMessagesHeaderComponent } from './home/recent-messages-header/recent-messages-header.component';
import { RecentMessageItemsComponent } from './home/recent-message-items/recent-message-items.component';
import { ChatComponent } from './home/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentMessagesHeaderComponent,
    RecentMessageItemsComponent,
    ChatComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
