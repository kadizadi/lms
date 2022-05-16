import { Component, OnInit } from '@angular/core';
import { User } from '../../entites/User';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmEventType } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class UserlistComponent implements OnInit {
  users: User[] = [];
  cols: any[] = [];
  productDialog: boolean;
  submitted: boolean;
  user: User;
  selectedUsers: User[];
  // mydate?: Date;
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  focusout(user: User) {
    console.log(user.name);
  }

  ngOnInit(): void {
    this.users = [
      {
        name: 'k',
        username: 'k@k.com',
        password: '123',
        enabled: true,
      },
      {
        name: 's',
        username: 's@s.com',
        password: '123',
        enabled: true,
      },
    ];
    this.cols = [
      { field: 'name', header: 'Name' },

      { field: 'username', header: 'username' },
    ];
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(
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

  editProduct(user: User) {
    console.log('hi');
    this.user = { ...user };
    this.productDialog = true;
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.name + ' ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter((val) => val.name !== user.name);
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

  onRowEditCancel(user: User, index: number) {
    console.log('hi');
    console.log(user.name);
  }
}
