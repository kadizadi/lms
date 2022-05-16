import { Component, OnInit } from '@angular/core';
import { Book } from '../entites/Book';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class BooklistComponent implements OnInit {
  // constructor() { }

  // ngOnInit(): void {
  // }
  Books: Book[] = [];
  cols: any[] = [];
  productDialog: boolean = false;
  submitted: boolean;
  selectedUsers: Book[];
  // mydate?: Date;
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.Books = [
      {
        name: 'k',
        author: 'kadi',
        available: true,
      },
      {
        name: 's',
        author: 'zadi',
        available: true,
      },
    ];
    this.cols = [
      { field: 'name', header: 'Name' },

      { field: 'author', header: 'Author' },
    ];
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.Books = this.Books.filter(
          (val) => !this.selectedUsers.includes(val)
        );
        this.selectedUsers = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  editBook(book: Book) {
    //product: Product
    // this.product = { ...product };
    // this.productDialog = true;
  }

  deleteBook(book: Book) {
    this.Books = this.Books.filter((val) => val.name !== book.name);
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete ' + user.name + '?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.users = this.users.filter((val) => val.name !== user.name);
    //     // this.user = null;
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Product Deleted',
    //       life: 3000,
    //     });
    //   },
    // });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
}
