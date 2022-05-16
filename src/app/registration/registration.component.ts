import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor() {}
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      { label: 'Step 1', },
      { label: 'Step 2' },
      { label: 'Step 3' },
    ];
  }
}
