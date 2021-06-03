import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css',
  './dist/css/style.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  lightsclass:string = "";
  theme:string = "dark";
  ngOnInit(): void {
  }

  onThemeToggle():void{
  
  switch (this.theme){
    case "dark":
      this.lightsclass = "lights-off";
      break;
    case "light":
      this.lightsclass = "";
     
      break;
      default:
        break;

      

  }
  if(this.theme === "light"){
    this.theme = "dark";
  }
  else{
    this.theme = "light";
  }

  console.log("click")
  
}
  
}

