import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  formBook: FormGroup;

  constructor() {
    this.formBook = new FormGroup({
      titulo: new FormControl(),
      autor: new FormControl(),
      id_curso: new FormControl(),
      desc1: new FormControl(),
      desc2: new FormControl(),
      url_img: new FormControl(),
      url_libro: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  saveOrUpdate() {
    console.log('Save or Update')
  }

}
