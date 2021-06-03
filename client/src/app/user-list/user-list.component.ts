import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Peer } from '../user.model';
import{UserService} from'../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  peers:Peer[]=[];
  
  peersSub:Subscription;

  constructor(public peerService:UserService) { }

  ngOnInit(): void {
   
  this.peerService.getPeers();
  this.peersSub = this.peerService.getpeerUpdatedListener().subscribe((peers:Peer[]) =>{
  this.peers = peers;
   });

  }
  ngOnDestroy() :void
  {
  this.peersSub.unsubscribe();
  }

}
