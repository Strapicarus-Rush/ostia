import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>;
  private apiUrl = 'http://localhost:4444/api/';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    const cero = {
      id: 0,
      username: '',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || JSON.stringify(cero)));
    
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email: email, password: password })
      .pipe(
        map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next({
      id: 0,
      username: '',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.router.navigate(['/login']);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    return throwError(() =>
      {'Something bad happened; please try again later.'});
  }
}