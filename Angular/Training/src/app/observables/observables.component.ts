import { Component, OnInit } from '@angular/core';
import { Observable, of, from, interval, fromEvent, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  myObserver : Observable<any> = of(1,2,3);
  constObserver : Observable<any>;

  constructor() { 
    this.constObserver = new Observable((data)=>{
      data.next(1);
      data.next(2);
      data.next(10);
      data.error('Error Occurred');
    });
  }

  ngOnInit(): void {
    this.myObserver.subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err);
    },()=>{
      console.log('Observable Completed');
    });

    this.constObserver.subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err);
    },()=>{
      console.log('Observable Completed');
    });

    // Create an Observable out of a promise
    const data = from(
      fetch("https://jsonplaceholder.typicode.com/todos/1").then(res=>{
        return res.json();
      })
    );
    
    data.subscribe(console.log);

    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    let secondsCounterObs = secondsCounter.subscribe(n =>
      console.log(`It's been ${n + 1} seconds since subscribing!`));

      secondsCounterObs.unsubscribe();

    // Create Observables from an event

    let eventObs = fromEvent(document.querySelector('#hover') , 'mousemove');
    eventObs.subscribe((data : MouseEvent)=>{
      console.log(`${data.clientX} and ${data.clientY}`);
    })

    // RxJS
    let values = from([1,2,3,4,5]).pipe(filter(el => el%2 ==0),map(el => el * el));
    values.subscribe(console.log);
  }

}
