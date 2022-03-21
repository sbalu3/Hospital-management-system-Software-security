import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';
import { PatientComponent } from './patient.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
const routes: Routes = [
  {
    path: '',
    component: PatientComponent
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent
  },
  {
    path: 'appointments',
    component:AppointmentsComponent
  },
  {
    path: 'prescription',
    component:PrescriptionComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'transactions',
    component:TransactionsComponent
  },
  {
    path: 'lab-tests',
    component:LabTestsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
