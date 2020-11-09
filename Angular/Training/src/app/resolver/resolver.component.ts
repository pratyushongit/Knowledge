import { Component, OnInit } from '@angular/core';
import { CrudService } from '../common/services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.css']
})
export class ResolverComponent implements OnInit {
  title : string = "";

  constructor(private service  : CrudService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.route.data.subscribe((data)=>{
      this.title = data.todoData.title;
    })
  }

}
