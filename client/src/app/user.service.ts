import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';


import { Peer } from './user.model';
import { logIn } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private peers: Peer[]=[]; //this will give the reference to array
  private peerUpdated = new Subject<Peer[]>();
  private logInuser:logIn;

  getPeers(){
    this.http
      .get<{ peers: Peer[] }>(
        "http://localhost:3000/api/users"
      ).subscribe(peerData => {
        this.peers = peerData.peers;
        this.peerUpdated.next([...this.peers])
      }); 
      
      
    //return [...this.peers]; // important to derefernce the array here as the arrays in JS are retruned by referece so derefrencein and returng the array.
  }

  getpeerUpdatedListener(){
  return this.peerUpdated.asObservable();
  }
   
  addPeers(Peer){
      const peer: Peer =Peer;
      this.http.post<{message:string}>("http://localhost:3000/api/sign-up",peer).subscribe(peerData => {
      console.log(peerData.message);
      this.peers.push(peer);
        this.peerUpdated.next([...this.peers]);
      });
      
      
  }



}
