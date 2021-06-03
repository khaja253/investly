import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/log-in/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth-guard';
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  {path:'signup', component:SignUpComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:LandingPageComponent}//,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
