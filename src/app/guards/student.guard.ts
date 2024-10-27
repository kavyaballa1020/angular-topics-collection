import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StudentService } from '../services/students.service';
@Injectable({
  providedIn: 'root',
})
export class StudentGuard implements CanActivate {
  constructor(private studentservice:StudentService, private router: Router) {}

  canActivate(): boolean {
    if (this.studentservice.isloggedin()) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
