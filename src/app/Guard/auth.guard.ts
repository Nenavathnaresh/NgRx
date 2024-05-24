// import { CanActivateFn, Router } from '@angular/router';
// import { Inject } from '@angular/core';
// import { AuthService } from '../Services/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   console.log(route,state)
//   const authService = Inject(AuthService)
//   const router = Inject(Router)
//   const loginStatus = JSON.parse(JSON.stringify(localStorage.getItem("isLoggedIn")))
//   console.log(loginStatus,typeof(loginStatus))
//   if(loginStatus){
//     return true
//   }

//   const canActivate = ()=>{
//     if (authService.isLoggedIn()) {
//       return true;
//     } else {
//       router.navigate(['/login']);
//       return false;
//     }
//   }
//   return false


import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}



