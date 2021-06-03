import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import{ Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  userisAuthenticated = false;
  private authListnerSubs:Subscription;

  constructor(public authService:AuthService) { }
  
  ngOnInit(): void {
  this.authListnerSubs = this.authService.getAuthStatusListner().subscribe(isAuthenticated=>{
    this.userisAuthenticated=isAuthenticated;
  });
  }
  ngOnDestroy():void{
    this.authListnerSubs.unsubscribe();
  }


  onLogOut(){
    this.userisAuthenticated= this.authService.getisAuthenticated();
    this.authService.onLogOut();

  }

}
