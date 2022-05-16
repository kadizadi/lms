import { Component, OnInit } from '@angular/core';

import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [MessageService],
  
})
export class RegistrationComponent implements OnInit {
  constructor() {}
  items: MenuItem[];

  activeIndex: number = 0;

  ngOnInit(): void {
    this.items = [
      {
        label: 'step1',
        routerLink: 'namepass',
      },
      {
        label: 'step2',
        routerLink: 'namepass',
      },
      
    ];
  }
}
