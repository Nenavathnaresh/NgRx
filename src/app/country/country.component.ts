import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCountries, loadCountriesSuccess } from '../country.actions';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  allCountries:any = []

  constructor(private store:Store<any>){
    store.select("countries").subscribe((res)=>{
      this.allCountries = res.countries
      console.log(this.allCountries);
    })
  }

  ngOnInit(){
    this.store.dispatch(loadCountries())
  }

}
