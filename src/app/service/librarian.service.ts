import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { User } from '../entites/User';

@Injectable({
  providedIn: 'root',
})
export class LibrarianService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/users';
  getUser(username: string) {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }
}
