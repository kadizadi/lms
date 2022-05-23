import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Librarian } from '../entites/Librarian';

@Injectable({
  providedIn: 'root',
})
export class LibrarianService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/librarians';
  getLibrarian(username: string) {
    return this.http.get<Librarian>(`${this.baseUrl}/${username}`);
  }
  getLibrarians() {
    return this.http.get<Librarian[]>(`${this.baseUrl}`);
  }

  deleatLibrarian: string;
  deleteLibrarian(librarian: Librarian) {
    this.deleatLibrarian = librarian.username!;

    return this.http.delete(`${this.baseUrl}/${this.deleatLibrarian}`);
  }
  updateLibrarian(librarian: Librarian) {
    return this.http.put(`${this.baseUrl}`, librarian);
  }
  addLibrarian(librarian: Librarian) {
    return this.http.post(`${this.baseUrl}`, librarian);
  }
}
