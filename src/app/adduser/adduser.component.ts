import { Component, OnInit } from '@angular/core';
import { User } from '../entites/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
myuser:User;
form = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ])
  
 });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

    // console.log(this.myuser.username);
  }

}
