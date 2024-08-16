import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShareService } from '../../common/services/share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class ParentComponent implements OnInit {
  appData : any[]= [10,20,30,40,50];
  myValue : string;
  constructor(private service : ShareService) { }

  ngOnInit(): void {
    this.service.setData({
      username : 'Pratyush',
      password : 'Biswas',
      isChecked : true
    })
  }

  eventData(data){
    this.myValue = data;
  }

}
