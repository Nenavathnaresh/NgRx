import { createReducer, on } from "@ngrx/store"
import { loadProductsSuccess } from "./products.action"


export const initialState:any = {
    products :[]
}

export const productReducer = createReducer(
    initialState,
    on(loadProductsSuccess,(state,action)=>{
        return {
            ...state,
            products:[...action.product]
        }
    })
)