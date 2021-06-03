import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Peer } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public peerService:UserService) { }

  firstName ='';
  lastName='';
  relation='Father';
  amount='';
  //peerget:Peer []=[];
  onEnterAmount(form:NgForm)
  {
    if(form.invalid)
    {
      return;
    }
    const peer:Peer = 
    {firstName:form.value.firstName,
        lastName:form.value.lastName,
        relation:this.relation,
        amount:form.value.amount,
        email:form.value.email,
        password:form.value.password};
        this.peerService.addPeers(peer);
        //this.peerget = this.peerService.getPeers();
        //alert(this.peerget[0].firstName+this.peerget[0].lastName+this.peerget[0].relation+this.peerget[0].amount);
        form.reset();

    }
  
  ngOnInit(): void {
  }

 
}
