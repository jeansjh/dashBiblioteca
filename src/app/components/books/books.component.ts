import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  notCover = 'https://www.spl.org/Seattle-Public-Library/images/books-media/default-list-icons/default-book-icon.png'

  public books: IBook[] = [];

  constructor(
    private service: BooksService,
    private store: StoreService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.books$.asObservable().subscribe((response: IBook[]) => {
      if (response.length > 0) {
        this.books = response;
      } else {
        this.getBooks();
      }
    });
  }

  getBooks() {
    this.service.getBooks().subscribe((response: IBook[]) => {
      console.log(response);
      this.books = response;
    })
  }

  selectBook(book: IBook) {
    this.store.selectedBook$.next(book);
    this.router.navigate(['book'])
  }

  editBook(book: IBook) {
    this.store.editBook$.next(book);
    this.router.navigate(['edit-book'])
  }

  addBook() {
    this.router.navigate(['add-book'])
  }

  deleteBook(id: number) {
    this.service.deleteBook(id).subscribe(response => {
      if (response) {
        this.books = this.books.filter(book => book.id !== id)
      }
    })
  }

  getImageCover(book:IBook): string {
    if(book.titulo !== undefined) {
      if(book.url_img == null || book.url_img == '' ) {
        return this.notCover;
      } else {
        return book.url_img;
      }
    }
    return this.notCover;
  }

}
