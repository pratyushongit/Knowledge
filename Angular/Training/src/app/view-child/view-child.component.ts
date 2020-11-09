import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../dataTransfer/child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('username') username : ElementRef;
  // @ViewChild(ChildComponent) componentRef : ChildComponent;
  @ViewChildren(ChildComponent) componentRef : QueryList<ChildComponent>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // Element
    this.username.nativeElement.textContent = "Mary";

    // Component
    // setInterval(() => {
    //   this.componentRef.today = new Date();  
    // }, 1000);    

    // Multiple Components
    let elArr = this.componentRef.toArray();
    elArr.forEach(element => {
      setInterval(() => {
        element.today = new Date();
    }, 1000);   
    });
  }

}
