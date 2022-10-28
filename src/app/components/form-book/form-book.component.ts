import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  formBook: FormGroup;
  book: IBook = {} as IBook;

  constructor(
    private service: BooksService,
    private store: StoreService,
    private router: Router
  ) {
    this.formBook = new FormGroup({
      titulo: new FormControl(),
      autor: new FormControl(),
      desc1: new FormControl(),
      desc2: new FormControl(),
      url_img: new FormControl(),
      url_libro: new FormControl()
    })
  }

  ngOnInit(): void {
    this.book = this.store.editBook$.getValue();
    this.formBook.patchValue(this.book);
  }

  saveOrUpdate() {
    if(this.book.id === undefined) {
      this.service.addBook(this.formBook.value).subscribe(response => {
        console.log(response)
        this.gotoMain();
        this.getBooks();
      })
    } else {
      this.service.updateBook(this.formBook.value, this.book.id).subscribe(response => {
        console.log(response)
        this.gotoMain();
        this.getBooks();
      })
    }
  }

  gotoMain() {
    this.router.navigate(['/books'])
  }

  ngOnDestroy() {
    this.store.editBook$.next({} as IBook)
  }

  getBooks() {
    this.service.getBooks().subscribe(response => response);
  }

}
