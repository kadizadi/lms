import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { User } from '../entites/User';

@Injectable({
  providedIn: 'root',
})
export class LibrarianService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/librarians';
  getLibrarian(username: string) {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }
  getLibrarians() {
    return this.http.get<User>(`${this.baseUrl}`);
  }
}
