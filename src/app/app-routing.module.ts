import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BooklistComponent } from './booklist/booklist.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { LibrarianlistComponent } from './librarian/librarianlist/librarianlist.component';
import { LoginComponent } from './login/login.component';
import { NamepassComponent } from './namepass/namepass.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist/userlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'librarian', component: LibrarianComponent },
  { path: 'user', component: UserComponent },
  { path: 'books', component: BooklistComponent },
  // { path: 'registration', component: RegistrationComponent },
  { path: 'namepass', component: NamepassComponent },

  {
    path: 'registration',
    component: RegistrationComponent,
    children: [{
        path: '',
        redirectTo: 'namepass',
        pathMatch: 'full'
      },
      {
        path: 'namepass',
        component: NamepassComponent
      },
      
      
    ],
  },
  



  // {
  //   path: 'registration',
  //   component: RegistrationComponent,
  //   children: [
  //     {path: '', redirectTo: 'namepass', pathMatch: 'full'},
  //     { path: 'namepass', component: NamepassComponent },
  //     // { path: 'seat', component: SeatComponent },
  //     // { path: 'payment', component: PaymentComponent },
  //   ],
  // },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  LibrarianlistComponent,
  UserlistComponent,
];
