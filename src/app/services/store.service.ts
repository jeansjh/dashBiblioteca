import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  books$ = new BehaviorSubject<IBook[]>([]);
  selectedBook$ = new BehaviorSubject<IBook>({} as IBook);
  editBook$ = new BehaviorSubject<IBook>({} as IBook);

constructor() { }

}
