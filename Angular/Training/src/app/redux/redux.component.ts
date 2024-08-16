import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_INGREDIENT } from '../common/ngrx/custom.actions';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {
  ingredients : Observable<any>;
  constructor(private store : Store<{shoppingList : { ingredients : []}}>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients.subscribe(data=>{
    //   console.log(data);
    // });
  }

  submit(form){
    console.log(form.value);
    this.store.dispatch({type : ADD_INGREDIENT, payload : form.value})
  }

}
