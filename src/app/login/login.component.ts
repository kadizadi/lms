import { Component, OnInit } from '@angular/core';
import { LibrarianService } from '../service/librarian.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private myuser: LibrarianService) {}

  ngOnInit(): void {
    this.myuser.getUser('k@k.com').subscribe((data) => {
      console.log(data);
    });
  }
}
