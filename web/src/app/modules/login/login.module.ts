import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsModule } from 'src/app/notifications/notifications.module';  //{ NotificationsComponent } from '../notifications/notifications.component';


const routes: Routes = [
  {
    path: "**", component: LoginComponent,
  },

];
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule, FormsModule,
    // NotificationsComponent
    NotificationsModule
  ]
})
export class LoginModule { }
