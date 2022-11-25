import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './home/chat/chat.component';
import { DefaultContainerComponent } from './home/default-container/default-container.component';
import { EditProfileComponent } from './home/edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { NewChatComponent } from './home/new-chat/new-chat.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './utils/Gaurd/Auth.gaurd';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'default',
        component: DefaultContainerComponent,
        outlet: 'right',
      },
      { path: 'chat', component: ChatComponent, outlet: 'right' },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'new-chat', component: NewChatComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
