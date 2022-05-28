import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from '../entites/Book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = environment.url + '/books';
  constructor(private http: HttpClient) { }


  getBook(bookid:number) {
    return this.http.get<Book>(`${this.baseUrl}/${bookid}`);
  }

  getbooks() {
    return this.http.get<Book[]>(`${this.baseUrl}`);
  }
 private deleatbookid: number;
  deletebook(book: Book) {
    this.deleatbookid = book.id!;
    console.log(this.deleatbookid);
    return this.http.delete(`${this.baseUrl}/${this.deleatbookid}`);
  }

  updateBook(book: Book) {
    return this.http.put(`${this.baseUrl}`, book);
  }
  addBook(book: Book) {
    return this.http.post(`${this.baseUrl}`, book  );
  }
}