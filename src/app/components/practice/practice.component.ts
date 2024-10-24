import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PracticeService } from '../../services/practice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private service: PracticeService) {}

  login() {
    const validUsername = 'nanna';
    const validPassword = '12345';
    if (this.username === validUsername && this.password === validPassword) {
      this.service.login();
      this.router.navigate(['/employee']);
    } else {
      alert('Invalid credentials');
    }
  }
}
