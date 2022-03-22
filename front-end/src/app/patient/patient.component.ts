import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  bookAppointment(){
    this.router.navigateByUrl('patient/book-appointment');
  }
  navigateToSection(section:any){
    this.router.navigateByUrl('patient/'+section);
  }

}
