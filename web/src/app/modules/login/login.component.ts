import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private notificationService: NotificationService, private router: Router) {

   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (v) => this.notificationService.showSuccess(v),
        error: (e) => this.notificationService.showError(e), 
        complete: () => this.router.navigate(['admin']) ///this.notificationService.show('Mensaje de notificación', 'cerrar') 
    });
  //   .subscribe({
  //     next: (v) => this.notificationService.showSuccess(v),
  //     error: (e) => this.notificationService.showError(e), 
  //     complete: () => this.router.navigate(['/login']) ///this.notificationService.show('Mensaje de notificación', 'cerrar') 
  // });
  }
}