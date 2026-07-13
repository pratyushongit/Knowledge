import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  param = 1;
  constructor(private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(event){
    event.preventDefault();   
    this.router.navigate(['child',this.param],{relativeTo : this.route})
  }

  navigateQuery(event){
    event.preventDefault();
    this.router.navigate(['child',this.param],{
      relativeTo : this.route,
      queryParams : {
        name : 'Biswas',
        age : 27
      },
      fragment : 'top',
      preserveFragment : true, //Preserve fragment from /results#top to /child/1#top
      skipLocationChange : true,
      // queryParamsHandling : 'merge' // from /view1?data=1 to /view2?data=1&name=John
      queryParamsHandling : 'preserve' // from /view1?data=1 to /view2?data=1 
    })
  }

}
