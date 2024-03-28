import { createAction, props } from "@ngrx/store";


export const loadProducts = createAction("[Product Component] Load Products")

export const loadProductsSuccess = createAction("[Product Component] Load Products Success", props<any>())
