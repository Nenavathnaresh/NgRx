import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CountryService } from "../services/country.service";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { loadProductsSuccess } from "./products.action";

@Injectable()
export class productsEffects {

    constructor(public action$: Actions, public countryService: CountryService) { }

    Products = createEffect(() =>
        this.action$.pipe(
            ofType("[Product Component] Load Products"),
            exhaustMap(() => {
                return this.countryService.getAllProducts().pipe(
                    map((data) => {
                        return loadProductsSuccess({ product: data })
                    }),
                    catchError(()=> EMPTY)
                )
            })
        )
    )
}