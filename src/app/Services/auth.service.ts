import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User, UserData } from '../user.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000/user';
  status: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  post(userData: User): Observable<boolean> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      switchMap((dataList) => {
        const emailExists = dataList.some((el) => el.email === userData.email);
        if (emailExists) {
          alert('Email already exists.');
          return of(false); // Return an observable of false
        } else {
          return this.http.post<any>(this.apiUrl, userData).pipe(
            map((response) => {
              sessionStorage.setItem('authToken', 'loggedIn');
              console.log('response', response);
              return true;
            }),
            catchError((error) => {
              console.error('Registration failed', error);
              alert('An error occurred during registration.');
              return of(false);
            })
          );
        }
      }),
      catchError((error) => {
        console.error('Failed to fetch users', error);
        alert('An error occurred while checking existing users.');
        return of(false);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('authToken');
    this.router.navigate(['/auth/login']);
  }

  userLogin(
    email: string | null,
    password: string | null
  ): Observable<boolean> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) => {
        const user = users.find((user) => user.email === email);
        if (!user) {
          alert('Email does not exist');
          return false;
        } else if (user?.password !== password) {
          alert('Incorrect Password');
          return false;
        }

        sessionStorage.setItem('authToken', 'loggedIn');
        return true;
      }),
      catchError((error) => {
        console.error('Login failed', error);
        alert('An error occurred during login.');
        return of(false);
      })
    );
  }

  canActivate(): boolean {
    if (sessionStorage.getItem('authToken')) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
