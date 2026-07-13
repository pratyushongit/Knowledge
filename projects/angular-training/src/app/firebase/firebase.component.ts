import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  courses : any[];

  constructor(private db: AngularFireDatabase) { 
    db.list('/courses').valueChanges().subscribe(data=>{
      this.courses = data;
      console.log(this.courses);
    });
  }

  ngOnInit(): void {
  }

}
