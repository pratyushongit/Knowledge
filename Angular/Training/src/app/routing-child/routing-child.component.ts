import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrudService } from '../common/services/crud.service';

@Component({
  selector: 'app-routing-child',
  templateUrl: './routing-child.component.html',
  styleUrls: ['./routing-child.component.css']
})
export class RoutingChildComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute, private service : CrudService) { }

  ngOnInit(): void {

    // Get Route Params
    this.route.paramMap.subscribe(data=>{
      console.log(data.get('id'));
    });
    let data = this.route.snapshot.paramMap.get('id');
    console.log(data);

    // Get Query Params
    let qData = this.route.snapshot.queryParamMap.get('name');
    console.log(qData);


    this.route.queryParamMap.subscribe(data=>{
      console.log(data.get('name'));
      console.log(data.get('page'));
      this.service.mockData(data.get('name')).subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(err);
      })
    });

    // Rewriting the above Functionality using SwitchMap
    this.route.queryParamMap.pipe(
      switchMap(params =>{
      let myData = params.get('name');
      return this.service.mockData(myData);
    })).subscribe(data=>{
      console.log('Switch Map-> '+ data);
    },err=>{
      console.log(err);
    });

    
  }

  navigate(event){
    event.preventDefault();   
    this.router.navigate(['../../'],{relativeTo : this.route})
  }

}
