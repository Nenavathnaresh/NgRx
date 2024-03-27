import { createReducer, on } from "@ngrx/store";
import { addtodo, deleteTodo, doneTodo, undoTodo } from "./todolist.action";

export const initialState: any[] = []

export const todoReducer = createReducer(
    initialState,
    on(addtodo, (state, payload) => {
        // console.log(payload.newtodoitem);
        
        return ([...state, {task:payload.newtodoitem, isStatus:false}])
    }),

    on(deleteTodo, (state, { ind }) => {
        var temp = [...state]
        temp.splice(ind,1)
        // console.log(temp);
        return [...temp];
    }),

    on(doneTodo,(state,{ind,todo})=>{
    
        var x = {...todo, isStatus : true}
        let temp = [...state]
        temp.splice(ind,1,x)
        // console.log(temp);
        return [...temp];
    }),

    on(undoTodo,(state,{ind})=>{
        var x = {...state[ind], isStatus : false}
        let temp = [...state]
        temp.splice(ind,1,x)
        console.log(temp);
        return [...temp];

    })
)