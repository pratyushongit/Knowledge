import { Component, OnInit } from '@angular/core';
import { CrudService } from '../common/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private service : CrudService) { }

  ngOnInit(): void {
    this.getData();
    // this.promiseToObs();
  }

  
  getData(){
   this.service.getData().subscribe((res)=>{
    console.log(res);
   },(error)=>{
     console.log('Error Occurred -> ' + error)
   });    
  }

  promiseToObs(){
    this.service.getTodoPromise().then(data=> console.log(data));

    this.service.getTodoObs().subscribe(data=>{
      console.log(data);
    });
  }

}
