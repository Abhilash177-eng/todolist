import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list:any=[];
  activity:any;

  addToList(){
   let x:any=[];
   x=this.activity;
   this.list.push(x);
   this.activity=null;
  }

  removeList(index:number,content:any)
  {
     this.list.splice(index,1);
     console.log(this.list);
  }

  
}
