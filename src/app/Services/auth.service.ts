import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { UserData } from '../user.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000/user';
  status: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  // post(userData: UserData): Observable<boolean> {
  //    this.http.get<UserData[]>(this.apiUrl).subscribe((dataList) => {
  //     dataList.map((el) => {
  //       if (el.email == userData.email) {
  //         alert('email already exist');
  //         return of(false);
  //       } else {
  //         return this.http.post<any>(this.apiUrl, userData).pipe(
  //           map((response) => {
  //             sessionStorage.setItem('authToken', 'loggedIn');
  //             console.log('response', response);
  //             this.status = true;
  //           })
  //         );
  //       }
  //     });
  //   });
  //   console.log('status', this.status);
  //   if (this.status) return of(true);

  //   return of(false);
  // }

  post(userData: UserData): Observable<boolean> {
    return this.http.get<UserData[]>(this.apiUrl).pipe(
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
    // console.log('hit');
    return this.http.get<UserData[]>(this.apiUrl).pipe(
      map((users) => {
        // console.log('hit 2');
        const user = users.find((user) => user.email === email);
        // console.log('user', user);
        if (!user) {
          alert('email does not exist');
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
