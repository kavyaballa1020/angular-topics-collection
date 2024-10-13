// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const isAuthenticated = this.authService.isLoggedIn(); // Replace with your actual authentication logic
    if (isAuthenticated) {
      return true; // Allow activation
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Prevent activation
    }
  }
}
