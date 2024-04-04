import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx';
  gen:string = ''
  techs:string[] = [];
  selectedCountry:string = ''

  update(e:any){
    if(e.target.checked){
      this.techs.push(e.target.value)
    }
    else{
      this.techs = this.techs.filter((tech)=>{
        if(e.target.value !== tech){
          return true
        }
        else{
          return false
        }
      })
    }
    console.log(this.techs);
    
  }
}
