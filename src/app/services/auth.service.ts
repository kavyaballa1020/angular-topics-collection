// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    // Replace this with your actual authentication logic
    return !!localStorage.getItem('user'); // Example: check if user is stored in localStorage
  }
}
