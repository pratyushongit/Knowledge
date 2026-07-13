import { Component, OnInit } from '@angular/core';
import { CrudService } from '../common/services/crud.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  title : string; 
  constructor(private service : CrudService) { }

  ngOnInit(): void {
  }

  compute(val){
    return val < 0 ? false : true;
  }

  trigger(){
    this.service.getData().subscribe(data=>{
      this.title = data.title;
    })
  }

}
