import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Subscription} from 'rxjs';

import { AuthService } from '../auth.service';
import { AuthData } from '../../auth/auth-data-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService) { }

  logInUser:AuthData;


  ngOnInit(): void {
//

  }
  onSubmit(form:NgForm):void{
    if (form.invalid){
      return;
    }
    const logInUser = {
      email:form.value.email,
      password:form.value.password
    }; 
    this.authService.login(logInUser);
    form.reset();
  }


}
