// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    // Check if the code is running in the browser
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('user'); // Check localStorage only in the browser
    }
    return false; // Return false if not in the browser
  }
}
