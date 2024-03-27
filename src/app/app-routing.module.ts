import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { TodolistComponent } from './todolist/todolist.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {path : "todolist", component:TodolistComponent},
  {path: "counter", component: CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
