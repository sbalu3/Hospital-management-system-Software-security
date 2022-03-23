import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  backToHome(){
    window.history.back();
  }

}
