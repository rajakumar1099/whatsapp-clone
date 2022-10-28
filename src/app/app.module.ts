import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecentMessagesHeaderComponent } from './home/recent-messages-header/recent-messages-header.component';
import { RecentMessageItemsComponent } from './home/recent-message-items/recent-message-items.component';
import { ChatComponent } from './home/chat/chat.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EditProfileComponent } from './home/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentMessagesHeaderComponent,
    RecentMessageItemsComponent,
    ChatComponent,
    EditProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
