import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Observable, of, zip } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { CrudService } from '../common/services/crud.service';

@Component({
  selector: 'app-combination-operators',
  templateUrl: './combination-operators.component.html',
  styleUrls: ['./combination-operators.component.css']
})
export class CombinationOperatorsComponent implements OnInit {

  color  : Observable<string> = of('white','green','red','blue');
  logo  : Observable<string> = of('fish','dog','bird','cow');

  constructor(private service : CrudService) { }

  ngOnInit(): void {
    console.log('------------------ZIP----------------');
    this.zipOperator();
    console.log('----------COMBINE LATEST--------------');
    this.combineLatestOperator();
    console.log('----------WITH LATEST FROM--------------');
    this.withLatestFromOperator();
    console.log('----------FORK JOIN--------------');
    this.forkJoinOperator();
  }

  zipOperator(){
    zip(this.color,this.logo).subscribe(([col,log])=>{
      console.log(`Color-> ${col} & Logo-> ${log}`);
    });
  }

  combineLatestOperator(){
    combineLatest([this.color,this.logo]).subscribe(([col,log])=>{
      console.log(`Color-> ${col} & Logo-> ${log}`);
    });
  }

  withLatestFromOperator(){
    this.color.pipe(withLatestFrom(this.logo)).subscribe(([col,log])=>{
      console.log(`Color-> ${col} & Logo-> ${log}`);
    });
  }

  forkJoinOperator(){
    forkJoin([this.color,this.logo]).subscribe(([col,log])=>{
      console.log(`Color-> ${col} & Logo-> ${log}`);
    });
  }
  forkJoinOperatorObs(){
    forkJoin([this.service.getData(),this.service.getData()]).subscribe(([col,log])=>{
      console.log(`Color-> ${col} & Logo-> ${log}`);
    });
  }

}
