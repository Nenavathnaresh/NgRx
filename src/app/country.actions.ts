import { createAction, props } from "@ngrx/store";


export const loadCountriesSuccess = createAction("[Country Component] Load Countries Success", props<any>())

export const loadCountries = createAction("[Country Component] Load Country")       