import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data-model';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })

export class AuthService
{
constructor(public http:HttpClient,public router:Router){}

  private token:string;
  
  // observerables are passive and we wrap an http request or event and we cant emit the new value manually
  // subject calls a next method manually to force it to emit a new value, so we use observable as an event emitter using object so we cnatrol when a new vlaue is emitted
  //we call next method manually to force it to emit a new vlaue
  //https://www.youtube.com/watch?v=jJ5a1dBxfno
  private authStatusListner = new Subject<boolean>();
  isAuthenticated = false;
    getToken(){
        return this.token;
    }
    getisAuthenticated(){
      return this.isAuthenticated;
    }
    getAuthStatusListner(){
      return this.authStatusListner.asObservable();
    }

  login(logInuser)
    {
      const authData:AuthData ={email:logInuser.email,password:logInuser.password};
      this.http.post<{token:string}>("http://localhost:3000/api/log-in",authData).subscribe(response=>{
      const token = response.token;
      this.token = token;
      this.router.navigate(['/home']);
      if(token){
        this.isAuthenticated = true;
        this.authStatusListner.next(true);
        this.router.navigate(['/home']);
      }     
     });
   }

   createUser(signup)
   { 
     this.http.post<{message:string}>("http://localhost:3000/api/sign-up",signup).subscribe(SignUpdata=>{
     const message =SignUpdata.message;    
     });
   }

   onLogOut(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListner.next(false);
    this.router.navigate(['/login']);
   }



}


  
