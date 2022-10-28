import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'add-book',
    component: AddBookComponent
  },
  {
    path: 'edit-book',
    component: EditBookComponent
  },
  {
    path: '**',
    redirectTo: 'books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
