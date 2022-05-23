import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../entites/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  //@ViewChild('f', { static: false }) signupForm: NgForm;
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
private myuser:User
fname:string;
username:string;
password:string;
mydate:Date  = new Date();
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
  constructor( private myusers:UserService   ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.myuser= this.myusers.getusercalss(this.fname,this.username, this.password);
    
    
    
    // this.myuser.dateofcreation = this.mydate;
    // this.myuser.username = this.email;
    // this.myuser.name=this.fname;
    // this.myuser.password=this.password;
    // this.myuser.enabled=true;
    console.log(this.myuser);
    // console.log(this.fname);
  }

}
