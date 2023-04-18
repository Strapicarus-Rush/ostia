import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: string[] = [];

  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
    this.notifications = this.notificationService.messages;
  }

  clearNotifications() {
    this.notificationService.messages = [];
    this.notifications = [];
  }
}