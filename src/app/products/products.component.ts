import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Store } from '@ngrx/store';
import { loadProducts } from '../store/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;
  constructor(public countryService:CountryService, public store:Store<any>){
    store.subscribe((res)=>{
      console.log(res);
      
    });
    
  }

  ngOnInit(){
    this.store.dispatch(loadProducts())

    this.store.select("products").subscribe((res)=>{
      this.products = res.products
      // console.log(this.products);
      
    })
  }

}
