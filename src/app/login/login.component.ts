import { Component, OnInit } from '@angular/core';
import { User } from '../entites/User';
import { LibrarianService } from '../service/librarian.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private myuser: UserService,private myusers:UserService) {}
 
  ngOnInit(): void {
    this.myuser.getUser('k@k.com').subscribe((data) => {
      // myu=data;
      console.log(data);

     
    });

    console.log("allusers");
    this.myusers.getUsers().subscribe((deta) => {
      
      console.log(deta);

      
    });
  }
}
