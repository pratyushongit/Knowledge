import { Component, Injectable, OnInit } from '@angular/core';
import { InjectibleService } from '../common/services/test.service';

@Component({
  selector: 'app-injectible',
  templateUrl: './injectible.component.html',
  styleUrls: ['./injectible.component.css']
})
export class InjectibleComponent implements OnInit {

  constructor(private service : InjectibleService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
   console.log(this.service.getData());
  }

}
