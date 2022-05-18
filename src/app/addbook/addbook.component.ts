import { Component, OnInit } from '@angular/core';
import { Book } from '../entites/Book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  mybook: Book;
  constructor() {}

  ngOnInit(): void {}
}
