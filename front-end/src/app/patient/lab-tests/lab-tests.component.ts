import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-tests',
  templateUrl: './lab-tests.component.html',
  styleUrls: ['./lab-tests.component.scss']
})
export class LabTestsComponent implements OnInit {
  panelOpenState:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  backToHome(){
    window.history.back();
  }

}
