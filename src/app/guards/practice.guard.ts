import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PracticeService } from '../services/practice.service';

@Injectable({
  providedIn: 'root',
})
export class PracticeGuard implements CanActivate {
  constructor(private service: PracticeService, private router: Router) {}

  canActivate(): boolean {
    if (this.service.isloggedin()) {
      return true;
    } else {
      this.router.navigate(['/practice']);
      return false;
    }
  }
}
