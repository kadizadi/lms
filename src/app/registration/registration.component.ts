import { Component, OnInit } from '@angular/core';

import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../entites/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [MessageService],
})
export class RegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  myuser:User ={};

  constructor(private router: Router, private _formBuilder: FormBuilder) {}

  // items: MenuItem[];

  // activeIndex: number = 0;

  // ngOnInit(): void {
  //   this.items = [
  //     {
  //       label: 'step1',
  //       routerLink: 'namepass',
  //     },
  //     {
  //       label: 'step2',
  //       routerLink: 'namepass',
  //     },

  //   ];
  // }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
