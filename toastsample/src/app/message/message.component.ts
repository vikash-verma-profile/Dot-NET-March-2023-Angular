import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { NotificationType } from '../models/notification.messages';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(private notificationService:NotificationService){}
  showMessage(){
    this.notificationService.sendMessage({
      message:"Hi I am vikash",
      type:NotificationType.success
    });
  }
}
