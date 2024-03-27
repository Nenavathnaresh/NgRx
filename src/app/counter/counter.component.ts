import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count:any;

  constructor(public store:Store<any>){
    this.count = store.select("count");
  //  this.count.subscribe((res:any)=>{
  //   console.log(res);
    
  //  }) 
  }
  
  ngOnInit(){}

  incre(){
    this.store.dispatch(increment());
    
  }
  decre(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }

}
