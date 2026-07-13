import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-change-detection-child',
  templateUrl: './change-detection-child.component.html',
  styleUrls: ['./change-detection-child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChildComponent implements OnInit, DoCheck {
  @Input('data') data : any[];
  constructor( private cd : ChangeDetectorRef) { 
    // cd.detach();
  }

  ngOnInit(): void {

  }

  ngDoCheck(){
    this.cd.markForCheck();
    // this.cd.detectChanges();
  }

}
