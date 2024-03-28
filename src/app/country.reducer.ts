import { createReducer, on } from "@ngrx/store"
import { loadCountries, loadCountriesSuccess } from "./country.actions"


export const initialState :any = {
    countries :[]
}

export const countryReducer = createReducer(
    initialState,
    on(loadCountriesSuccess, (state,action)=>{
        return {
            ...state,
            countries:[...action.country]
        }
    })
)