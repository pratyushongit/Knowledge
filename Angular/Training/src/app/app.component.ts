import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from './common/services/crud.service';
import { EventEmitterService } from './common/services/eventEmitter.service';
import { Direction } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Training';
  source = "./assets/imgs/img.jpg"
  colSpan = 2;
  isActive = false;
  userVal : string;
  bindModel : string;
  pipes = {
    myName : 'Pratyush',
    num : 23456,
    rating : 4.12345,
    price : 190.10,
    now : new Date()
  };
  search : string;
  filterLoop = ['Mother', 'Father', 'Sister', 'Brother'];
  myLoop : any[];
  textColor = 'pink';
  styleObj = {
    'font-size' : '15px',
    'color' : this.textColor
  }
  task = {
    operator : undefined
  }
  promise : Promise<any>;
  observable : Observable<any>;

  constructor(private service : CrudService, private em : EventEmitterService){
    this.promise = this.getPromise();
    this.observable = this.getObservable();
  }

  ngOnInit(){
    this.em.myEvent.subscribe(data=>{
      console.log(data);
    });

    let myName : Direction = 'up';
  }

  trigger(){
    console.log('key pressed');
  }

  submit(user){
    this.userVal = user.value;
  }

  loadData(){
    this.myLoop = [
      {id : 1, course : 'Red'},
      {id : 2, course : 'Green'}
    ];
  }

  trackData(course){
    return course? course.id : undefined;
  }

  getPromise(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('New Promise String');
      }, 3000);
    });
  }

  getObservable(){
    return this.service.getData();
  }
}
