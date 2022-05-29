import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { filter } from 'rxjs';
import { Book } from '../entites/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  mybook: Book = {};
  mybookList: Book[];
  constructor(private primengConfig: PrimeNGConfig, private mybooks: BookService) { }

  ngOnInit(): void {
    
    this.mybooks.getbooks().subscribe((deta) => { this.mybookList = deta })


  }

  displayDilog: boolean;

  showBasicDialog() {
    this.displayDilog = true;
  }
  tempbookid: number = 0;
  onSubmit() {

    console.log(this.mybookList);
    
    this.mybook.id =19;
    this.mybook.available = true;
    this.displayDilog = false;

    this.mybook.DoPurchase = new Date();

    
    // for (let index = 0; index < this.mybookList.length ; index++) {

    //   while (this.tempbookid === this.mybookList[index].id) {
    //     this.tempbookid++;

    //   }

    // }
    
  

    console.log(this.mybook.DoPurchase);

    this.mybooks.addBook(this.mybook).subscribe((deta) => { });
    this.mybook = {};

  }



}
