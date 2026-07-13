import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitterService } from 'src/app/common/services/eventEmitter.service';
import { ShareService } from '../../common/services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('is-appData')inpAppData : any[];
  @Output('is-outData') outData : EventEmitter<string> = new EventEmitter<string>();
  today : Date = new Date();
  constructor(private em : EventEmitterService, private service : ShareService) { }

  ngOnInit(): void {
    let val = this.service.getData();
    console.log(val);
  }

  ngOnChanges(changes : SimpleChanges){
    if(changes['inpAppData']){
      console.log(this.inpAppData);
    }
  }

  trigger(){
    this.outData.emit("My Output Data");
    this.em.myEvent.emit('Event emitter data');
  }

}
