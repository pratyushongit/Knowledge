import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  // selected : string = "F";
  // textData : string = "my valluuueee";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(username){
    console.log(username);
  }

  formSubmit(form){
    console.log(form);
  }

}
