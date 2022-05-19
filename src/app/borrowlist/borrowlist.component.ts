import { Component, OnInit } from '@angular/core';
import { Borrow } from '../entites/Borrow';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmEventType } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { User } from '../entites/User';
import { UserComponent } from '../user/user.component';
import { Book } from '../entites/Book';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-borrowlist',
  templateUrl: './borrowlist.component.html',
  styleUrls: ['./borrowlist.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class BorrowlistComponent implements OnInit {
  borrows: Borrow[] = [];
  cols: any[] = [];
  productDialog: boolean;
  submitted: boolean;
  borrow: Borrow;
  selectedUsers: Borrow[];
  date: Date = new Date('2019-01-16');
  // mydate?: Date;
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  focusout(borrow: Borrow) {
    console.log(borrow.id); //put update insted
  }

  user: User = {
    name: 'k',
    username: 'k@k.com',
    password: '123',
    enabled: true,
  };
  book: Book = {
    name: 'k',
    author: 'kadi',
    available: true,
  };
  todayWithPipe: string;
  pipe = new DatePipe('en-US');
  ngOnInit(): void {
    // this.todayWithPipe = this.pipe.transform(date, 'yyyy.MM.dd');
    this.borrows = [
      {
        id: 1,
        available: true,
        startdate: this.date,
        enddate: this.date,
        returndate: this.date,
        user: this.user,
        book: this.book,
      },
      {
        id: 2,
        available: true,
        startdate: this.date,
        enddate: this.date,
        returndate: this.date,
        user: this.user,
        book: this.book,
      },
    ];
    this.cols = [
      { field: 'id', header: 'Id' },

      { field: 'available', header: 'Available' },

      { field: 'startdate', header: 'Startdate' },
    ];
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.borrows = this.borrows.filter(
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

  editProduct(borrow: Borrow) {
    console.log('hi');
    this.borrow = { ...borrow };
    this.productDialog = true;
  }

  deleteUser(borrow: Borrow) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + borrow.id + ' ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.borrows = this.borrows.filter((val) => val.id !== borrow.id);
        // this.user = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  onRowEditCancel(borrow: Borrow, index: number) {
    console.log('hi');
    console.log(borrow.id);
  }
}
