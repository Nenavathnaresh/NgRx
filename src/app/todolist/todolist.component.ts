import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addtodo, deleteTodo, doneTodo, undoTodo } from '../todolist.action';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos$:Observable<any>
  newtodoitem:any;
  update:boolean = false;

  constructor(public store:Store<any>){
    this.todos$ = store.select("todos")
  }

  ngOnInit(){}

  addtodo(){
    this.store.dispatch(addtodo({newtodoitem:this.newtodoitem}))
  
  }

  delete(i:any){
    this.store.dispatch(deleteTodo({ind:i}))
  }

  done(i:any,t:any){
    this.store.dispatch(doneTodo({ind:i, todo:t}))
  }

  undo(i:any){
    this.store.dispatch(undoTodo({ind:i}))
  }

}
