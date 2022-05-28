import { Component, OnInit } from '@angular/core';
import { Book } from '../entites/Book';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmEventType } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { BookService } from '../service/book.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class BooklistComponent implements OnInit {

  Books: Book[] = [];
  cols: any[] = [];
  productDialog: boolean = false;
  submitted: boolean;
  book:Book;
  selectedBooks: Book[];
  // mydate?: Date;
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private myBooks:BookService 
  ) { }

  focusout(book: Book) {
    console.log(book.name);
    this.myBooks.updateBook(book).subscribe((deta) => {});
  }
  ngOnInit(): void {
    // this.Books = [
    //   {
    //     name: 'k',
    //     author: 'kadi',
    //     available: true,
    //   },
    //   {
    //     name: 's',
    //     author: 'zadi',
    //     available: true,
    //   },
    // ];
    this.myBooks.getbooks().subscribe((deta) => {
      this.Books = deta;
    });
    this.cols = [
      { field: 'name', header: 'Name' },

      { field: 'author', header: 'Author' },
    ];
  }
  // deleteSelectedProducts() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete the selected products?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.Books = this.Books.filter(
  //         (val) => !this.selectedBooks.includes(val)
  //       );
  //       this.selectedBooks = [];
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Products Deleted',
  //         life: 3000,
  //       });
  //     },
  //   });
  // }

  editBook(book: Book) {
    //product: Product
    // this.product = { ...product };
    // this.productDialog = true;
  }

  deleteBook(book: Book) {
  
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + book.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.myBooks.deletebook(book).subscribe((deta) => {});
        this.Books = this.Books.filter((val) => val.id !== book.id);

        // this.user = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
}
