import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  private loggedIn = false;

  login(data:any) {
    if(data.username == "naresh" && data.password == '123'){
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(["/home"])
    }
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }
}
