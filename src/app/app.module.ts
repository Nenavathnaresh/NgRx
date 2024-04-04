import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './countryEffects';
import { countryReducer } from './country.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { productsEffects } from './store/products.Effects';
import { productReducer } from './store/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot( {countries:countryReducer, products:productReducer}),
    EffectsModule.forRoot([CountryEffects, productsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
