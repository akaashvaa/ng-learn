import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserData } from '../user.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/user';

  getAllTheUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
