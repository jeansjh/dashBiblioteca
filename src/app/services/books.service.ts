import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../interfaces/book';
import { Observable, tap } from 'rxjs';
import { StoreService } from './store.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private store: StoreService
    ) { }

  getBooks():Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL).pipe(
      tap((books:IBook[]) => this.store.books$.next(books))
    );
  }

  addBook(book: IBook) {
    return this.http.post(this.API_URL, book);
  }

  updateBook(book: IBook, id:number) {
    return this.http.put(`${this.API_URL}/${id}`, book);
  }

  deleteBook(id:number) {
    return this.http.delete(`${this.API_URL}/${id}`)
  }

}
