import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  providers: [MessageService],
})
export class AddbookComponent implements OnInit {
  constructor(private messageService: MessageService, private router: Router) {}
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
    ];
  }
}
