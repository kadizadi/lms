import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../entites/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
myuser:User;
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
fname:string;
email:string;
password:string;
// form = new FormGroup({
//   firstName: new FormControl('', Validators.required),
//   lastName: new FormControl('', Validators.required),
//   email: new FormControl('', [
//     Validators.required,
//     Validators.email
//   ]),
//   password: new FormControl('', [
//     Validators.required,
//     Validators.minLength(6)
//   ])
  
//  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

    console.log(this.fname);
  }

}
