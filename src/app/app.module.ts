import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBookComponent } from './components/form-book/form-book.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    FormBookComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
