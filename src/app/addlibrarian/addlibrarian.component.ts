import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Librarian } from '../entites/Librarian';
import { LibrarianService } from '../service/librarian.service';
@Component({
  selector: 'app-addlibrarian',
  templateUrl: './addlibrarian.component.html',
  styleUrls: ['./addlibrarian.component.css']
})
export class AddlibrarianComponent implements OnInit {
  mylibrarian:Librarian={};
  constructor( private primengConfig: PrimeNGConfig,private mylibrarians: LibrarianService) { }

  ngOnInit(): void {
  }
  displayDilog: boolean;

  showBasicDialog() {
    this.displayDilog = true;
}
onSubmit(){
  this.displayDilog=false;
  console.log('in onsubmitt');
  this.mylibrarian.dateofcreation = new Date();
  this.mylibrarian.enabled = true;
  console.log(this.mylibrarian);
  this.mylibrarians.addLibrarian(this.mylibrarian).subscribe((deta) => {});
  this.mylibrarian={};
}

}
