import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namepass',
  templateUrl: './namepass.component.html',
  styleUrls: ['./namepass.component.css'],
})
export class NamepassComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
