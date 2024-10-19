import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule,CommonModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}  // Inject AuthService

  login() {
    const validUsername = 'nanna';
    const validPassword = '12345';

    if (this.username === validUsername && this.password === validPassword) {
      this.authService.login();  // Mark the user as logged in
      this.router.navigate(['binding/twowaybinding']);  // Navigate to the desired component
    } else {
      alert('Invalid username or password!');
    }
  }
}
