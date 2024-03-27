import { createAction, props } from "@ngrx/store";

export const addtodo = createAction("[Todolist Component] Addtodo", props<any>())
export const deleteTodo = createAction("[Todolist Component] Delete", props<any>())
export const doneTodo = createAction("[Todolist Component] Done", props<any>())
export const undoTodo = createAction("[Todolist Component] Undo", props<any>())
// console.log(props);
