// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

//     if (isLoggedIn) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // User is logged in, allow access
    } else {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false;
    }
  }
}
