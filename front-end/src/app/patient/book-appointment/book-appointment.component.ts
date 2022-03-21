import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  searchForm=  new FormControl('');
  bookForm = new FormGroup({
    date: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  backToHome(){
    window.history.back();
  }

}
