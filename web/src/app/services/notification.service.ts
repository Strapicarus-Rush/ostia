import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }

  constructor(private snackBar: MatSnackBar) { }

  public show(message: string, action: string, config?: MatSnackBarConfig) {
    this.snackBar.open(message, action, config);
    // this.notificationService.showNotification('Mensaje de notificación', 'cerrar', 3000);

  }

  // constructor(private snackBar: MatSnackBar) {}

  public showSuccess(message: string, duration: number = 3000) {
    this.showMessage(message, 'success-snackbar', duration);
  }

  public showError(message: string, duration: number = 3000) {
    this.showMessage(message, 'error-snackbar', duration);
  }

  private showMessage(message: string, cssClass: string, duration: number) {
    const config = new MatSnackBarConfig();
    config.panelClass = [cssClass];
    config.duration = duration;
    this.snackBar.open(message, 'X', config);
  }
}



  