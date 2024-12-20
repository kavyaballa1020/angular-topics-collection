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

  constructor(private router: Router, private authService: AuthService) {} 

  login() {
    const validUsername = 'nanna';
    const validPassword = '12345';

    if (this.username === validUsername && this.password === validPassword) {
      this.authService.login();  
      this.router.navigate(['binding/twowaybinding']);  
    } else {
      alert('Invalid username or password!');
    }
  }
}
