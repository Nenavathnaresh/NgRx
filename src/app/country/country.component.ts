import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCountries, loadCountriesSuccess } from '../country.actions';
import { CountryService } from '../services/country.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  allCountries:any = []
  key:any = 'nnn';
  data:any[] = ["naresh", "suresh"]

  constructor(private store:Store<any>, private CountryService:CountryService){

    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(this.data), this.key).toString(); 
    localStorage.setItem('encryptedData', encryptedData);
   
  }

  ngOnInit(){

    localStorage.setItem("country","India")

    this.store.select("countries").subscribe((res)=>{
      this.allCountries = res.countries
      // console.log(this.allCountries);
    })
   
  }
  getlogin(){
    this.store.dispatch(loadCountries())

    let body={
      loginName: "Admin",
      password : "Admin@321"
    }
    this.CountryService.login(body).subscribe(res => console.log(res))
  }
}
