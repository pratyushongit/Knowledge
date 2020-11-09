import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {
  
  constructor() { 
    console.log('CONSTRUCTOR');
  }

  ngOnChanges(){
    console.log('ON CHANGES');
  }

  ngOnInit(): void {
    console.log('ON INIT');
  } 

  ngDoCheck(){
    console.log('DO CHECK');
  }

  ngAfterContentInit(){
    console.log('AFTER CONTENT INIT');
  }

  ngAfterContentChecked(){
    console.log('AFTER CONTENT CHECKED');
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
  }

  ngAfterViewChecked(){
    console.log('AFTER VIEW CHECKED');
  }

  ngOnDestroy(){
    console.log('ON DESTROY');
  }

}
