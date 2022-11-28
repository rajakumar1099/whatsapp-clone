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
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './utils/Interceptors/AddHeaderInterceptor';
import { AuthService } from './services/auth.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthGuard } from './utils/Gaurd/Auth.gaurd';
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbModule,
  NgbDropdown,
} from '@ng-bootstrap/ng-bootstrap';
import { NewChatComponent } from './home/new-chat/new-chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGaurd } from './utils/Gaurd/Login.gaurd';
import { DefaultContainerComponent } from './home/default-container/default-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentMessagesHeaderComponent,
    RecentMessageItemsComponent,
    ChatComponent,
    EditProfileComponent,
    LoginComponent,
    NewChatComponent,
    DefaultContainerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginGaurd,
    NgbDropdown,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
