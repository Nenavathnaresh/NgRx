// import { CanActivateFn } from '@angular/router';

// export const loginGuard: CanActivateFn = (route, state) => {
//   return true;
// };



import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
    console.log("loginguard called")
  }
}

