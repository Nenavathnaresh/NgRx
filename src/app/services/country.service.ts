import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(public http:HttpClient) { }

  getAllCountries(){
    return this.http.get("https://restcountries.com/v3.1/all")
  }

  getAllProducts(){
    return this.http.get("https://fakestoreapi.com/products")
  }
}
