import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {


    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('user'); 
    }
    return false; 
  }
}
