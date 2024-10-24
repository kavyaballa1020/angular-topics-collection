import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  authenticated:boolean=false
  constructor() { }
  login(){
    this.authenticated=true;
  }
  logout(){
    this.authenticated=false;
  }
  isloggedin():boolean{
   return this.authenticated
  }
}
