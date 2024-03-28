import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CountryService } from "./services/country.service";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { loadCountriesSuccess } from "./country.actions";


@Injectable()
export class CountryEffects {

    constructor(private actions$: Actions, private countryService: CountryService) { }

    ngOnInit() { }

    _Countries$ = createEffect(() =>
        this.actions$.pipe(
            ofType("[Country Component] Load Country"),
            exhaustMap((action) => {
                return this.countryService.getAllCountries().pipe(
                    map((data) => {
                        return loadCountriesSuccess({ country: data })
                    }),
                    catchError(() => EMPTY)
                )
            })
        )
    )

}