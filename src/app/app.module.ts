import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecentMessagesListComponent } from './home/recent-messages-list/recent-messages-list.component';
import { RecentMessageItemsComponent } from './home/recent-message-items/recent-message-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentMessagesListComponent,
    RecentMessageItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
