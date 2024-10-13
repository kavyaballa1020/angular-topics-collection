// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Perform your login logic here
    // For demonstration, we're just adding a user to localStorage
    localStorage.setItem('user', 'authenticated');
    this.router.navigate(['/twowaybinding']); // Redirect to two way binding after login
  }
}
