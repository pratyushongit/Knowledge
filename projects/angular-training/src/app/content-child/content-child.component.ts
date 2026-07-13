import { AfterContentInit, Component, ContentChild, OnInit, ElementRef, QueryList, ContentChildren, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ChildComponent } from '../dataTransfer/child/child.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit, AfterContentInit {
  @ContentChild('username') username : ElementRef;
  // @ContentChild(ChildComponent) childComponentRef : ChildComponent;
  @ContentChildren(ChildComponent) childComponentRef : QueryList<ChildComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    // Element
    console.log(this.username.nativeElement);
    this.username.nativeElement.textContent = "Pratyush";
    
    // Components
    console.log(this.childComponentRef.toArray());
    this.childComponentRef.toArray().forEach(el=>{
      setInterval(()=>{
        el.today = new Date();
      },1000)
    })
  }
}
