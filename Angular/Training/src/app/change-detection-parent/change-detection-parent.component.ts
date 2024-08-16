import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-parent',
  templateUrl: './change-detection-parent.component.html',
  styleUrls: ['./change-detection-parent.component.css'],
  changeDetection :  ChangeDetectionStrategy.Default
})
export class ChangeDetectionParentComponent implements OnInit {
  data : any[] = [];
  count = 0;
  constructor(private cd : ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
  }

  trigger(){
    this.data.push(new Date().getTime());
    // this.data = this.data.concat(new Date().getTime());
  }

}
