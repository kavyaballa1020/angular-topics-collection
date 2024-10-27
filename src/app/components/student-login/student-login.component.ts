import { Component } from '@angular/core';
import { StudentService } from '../../services/students.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
      constructor(private obj:StudentService,private router:Router){}
      username:string='';
      password:string='';
      login(){
        const validUsername="nanna"
        const password="12345"
        if(this.username==validUsername && this.password==password){
          this.obj.login();
          this.router.navigate(['/student']);
        }else{
          alert("invalid username and password");
        }
      }
}
