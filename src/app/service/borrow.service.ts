import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Borrow } from '../entites/Borrow';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  private baseUrl = environment.url + '/borrows';

  constructor(private http: HttpClient) { }

  
  getBorrow(borrowid: number) {
    return this.http.get<Borrow>(`${this.baseUrl}/${borrowid}`);
  }

  getBorrows() {
    return this.http.get<Borrow[]>(`${this.baseUrl}`);
  }
  deleatBorrowid: number;
  deleteBorrow(borrow: Borrow) {
    this.deleatBorrowid = borrow.id!;
    return this.http.delete(`${this.baseUrl}/${this.deleatBorrowid}`);
  }
  updateBorrow(borrow: Borrow) {
    return this.http.put(`${this.baseUrl}`, borrow);
  }
  addBorrow(borrow: Borrow) {
    return this.http.post(`${this.baseUrl}`, borrow);
  }

}
