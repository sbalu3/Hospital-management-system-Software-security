import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from '../patient/patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';

@NgModule({
  declarations: [
  
    PatientComponent,
       BookAppointmentComponent,
       AppointmentsComponent,
       PrescriptionComponent,
       ProfileComponent,
       TransactionsComponent,
       LabTestsComponent
    
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AppMaterialModule
  ]
})
export class PatientModule { }
