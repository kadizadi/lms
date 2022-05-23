import { Component, OnInit } from '@angular/core';
import { Librarian } from '../../entites/Librarian';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { LibrarianService } from 'src/app/service/librarian.service';

@Component({
  selector: 'app-librarianlist',
  templateUrl: './librarianlist.component.html',
  styleUrls: ['./librarianlist.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class LibrarianlistComponent implements OnInit {
  // constructor() {}

  // ngOnInit(): void {}
  Librarians: Librarian[] = [];
  cols: any[] = [];
  productDialog: boolean = false;
  submitted: boolean;
  selectedUsers: Librarian[];
  // mydate?: Date;
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private myLibrarian: LibrarianService
  ) {}

  ngOnInit(): void {
    // this.Librarians = [
    //   {
    //     name: 'k',
    //     username: 'k@k.com',
    //     password: '123',
    //     enabled: true,
    //   },
    //   {
    //     name: 's',
    //     username: 's@s.com',
    //     password: '123',
    //     enabled: true,
    //   },
    // ];
    this.myLibrarian.getLibrarians().subscribe((deta) => {
      this.Librarians = deta;
    });
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
        this.Librarians = this.Librarians.filter(
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

  editLibrarian(librarian: Librarian) {
    //product: Product
    // this.product = { ...product };
    // this.productDialog = true;
  }

  deleteLibrarian(librarian: Librarian) {
    this.Librarians = this.Librarians.filter(
      (val) => val.name !== librarian.name
    );
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
