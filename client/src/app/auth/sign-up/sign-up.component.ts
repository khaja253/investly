import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { AuthData } from '../../auth/auth-data-model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public authService:AuthService) { }
  SignUpUser:AuthData;


  ngOnInit(): void {
  }




  onSignUpSubmit(form:NgForm):void{
    if (form.invalid){
      return;
    }
    const SignUpUser = {
      email:form.value.email,
      password:form.value.password
    }; 
    this.authService.createUser(SignUpUser);
    form.reset();
  }
}
