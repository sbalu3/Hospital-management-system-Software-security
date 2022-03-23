import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  showLogin:boolean=false;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  continueToLogin(){
    this.router.navigateByUrl('patient')
  }

}
