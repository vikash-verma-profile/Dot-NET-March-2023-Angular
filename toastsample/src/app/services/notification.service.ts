import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  NotificationMessage,
  NotificationType,
} from '../models/notification.messages';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject: Subject<NotificationMessage> =
    new Subject<NotificationMessage>();

  sendMessage(message: NotificationMessage) {
    this.notificationSubject.next(message);
  }
  constructor(private toastservice: ToastrService) {
    this.listenForMessages();
  }

  listenForMessages() {
    this.notificationSubject.subscribe((message) => {
      switch (message.type) {
        case NotificationType.success:
          this.toastservice.success(message.message);
          break;
        case NotificationType.warning:
          this.toastservice.success(message.message);
          break;
      }
    });
  }
}
