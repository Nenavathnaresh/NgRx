import { Component, Injectable } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Store } from '@ngrx/store';
import { loadProducts } from '../store/products.action';

import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;

  encryptedDataFromStorage:any;
  constructor(public countryService:CountryService, public store:Store<any>){
    store.subscribe((res)=>{
      // console.log(res);
      
    });
    
  }

  ngOnInit(){

    this.encryptedDataFromStorage = localStorage.getItem('encryptedData');
    console.log(this.encryptedDataFromStorage);
    
    const decryptedData = CryptoJS.AES.decrypt(this.encryptedDataFromStorage, 'nnn').toString(CryptoJS.enc.Utf8)
    const decryptedArray = JSON.parse(decryptedData);
    console.log(decryptedData);

   
    if (typeof localStorage !== 'undefined') {
      // Access localStorage here
      const data = localStorage.getItem('country');
      console.log(data);
    } else {
      console.warn('localStorage is not available. Ensure you are running in a browser environment.');
    }


    this.store.dispatch(loadProducts())

    this.store.select("products").subscribe((res)=>{
      this.products = res.products

      // console.log(this.products); 
      
    })
  }

}
