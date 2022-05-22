import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { UserlistComponent } from './user/userlist/userlist.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added this
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LibrarianlistComponent } from './librarian/librarianlist/librarianlist.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { UserComponent } from './user/user.component';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';

import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { StepsModule } from 'primeng/steps';
import { MessageModule } from 'primeng/message';
import { NamepassComponent } from './namepass/namepass.component';

import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BorrowlistComponent } from './borrowlist/borrowlist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserlistComponent,
    LibrarianlistComponent,
    BooklistComponent,
    NavbarComponent,
    LibrarianComponent,
    UserComponent,
    NamepassComponent,
    BorrowlistComponent,
    AddbookComponent,
    AdduserComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MessageModule,
    StepsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    MessagesModule,
    ConfirmDialogModule,
    AppRoutingModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,

  ],
  providers: [MessageService, ConfirmationService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
