import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-namepass',
  templateUrl: './namepass.component.html',
  styleUrls: ['./namepass.component.css'],
})
export class NamepassComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  
  constructor(private router: Router,private _formBuilder: FormBuilder) {}
  

  navigateToNext() {
    // this.router.navigate(['/steps/seat'])
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  }



