import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginStatus:boolean=true
  loginForm:FormGroup;

  constructor(private router:Router, private authService:AuthService){
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
    console.log(this.loginForm)
  }

  login(){
    this.authService.login(this.loginForm.value)
    console.log(this.loginForm.value)
   
  }

}
