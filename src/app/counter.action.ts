import { createAction } from "@ngrx/store";


export const increment = createAction("[Counter Conponent] Increment")
// console.log(increment);

export const decrement = createAction("[Counter Component] Decrement")

export const reset = createAction("[Counter Component] Reset")