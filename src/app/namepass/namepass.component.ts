import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-namepass',
  templateUrl: './namepass.component.html',
  styleUrls: ['./namepass.component.css'],
})
export class NamepassComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    
  }

  navigateToNext() {
    this.router.navigate(['/steps/seat'])
  }
  nextPage() {
    // if (
    //   this.personalInformation.firstname &&
    //   this.personalInformation.lastname &&
    //   this.personalInformation.age
    // ) {
    //   this.ticketService.ticketInformation.personalInformation =
    //     this.personalInformation;
    //   this.router.navigate(['steps/seat']);
    //   return;
    // }
    // this.submitted = true;
  }
}
