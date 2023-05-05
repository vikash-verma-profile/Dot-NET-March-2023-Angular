export class NotificationMessage{
    message:string='';
    type:NotificationType=NotificationType.success;
}
export enum NotificationType{
    success=0,
    warning=1
}