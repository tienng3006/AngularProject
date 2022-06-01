import { Injectable } from '@angular/core';
import { User } from '../User';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl =
    'https://628f1d00dc47852365396d53.mockapi.io/usersmanagement/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }
  deleteUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }
  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user, httpOptions);
  }
}
