import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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
  login(data:any){
    return this.http.post<any>(`${environment.url}${environment.login}`,data, this.httpOptions())
  }
  httpOptions() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return options;
  }
}
