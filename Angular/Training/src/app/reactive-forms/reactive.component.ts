import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AsyncValidator } from 'src/app/common/validators/asyncValidator.validator';
import { CheckSpaceValidator } from 'src/app/common/validators/checkSpace.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form : FormGroup;
  formArray : FormArray;
  constructor(private fb : FormBuilder, private store : Store<{shoppingList : { ingredients : []}}>) {
    // this.form = new FormGroup({
    //   account : new FormGroup({
    //     username : new FormControl('',[Validators.required,Validators.minLength(6),CheckSpaceValidator.checkSpace,AsyncValidator.checkElement]),
    //     password : new FormControl('',Validators.required)
    //   })
    // });
    // this.formArray = new FormArray([
    //   new FormControl('JohnLenon',[Validators.minLength(6)]),
    //   new FormControl('myPass',[Validators.required]),
    //   this.form
    // ]);
    this.form = this.fb.group({
      account : this.fb.group({
        username : ['',[Validators.required,Validators.minLength(6),CheckSpaceValidator.checkSpace,AsyncValidator.checkElement]],
        password : ['', [Validators.required]]
      })
    });
    this.formArray = this.fb.array([
      this.fb.control('',Validators.required),
      this.fb.control('',Validators.minLength(2)),
      this.fb.group({
        account : this.fb.group({
          username : this.fb.control('JohnLennon',[Validators.minLength(6)]),
          password : this.fb.control('',Validators.required)
        })
      })
    ]);
  }

  ngOnInit(): void {
    this.store.select('shoppingList').subscribe(data=> {console.log(data)});
  }

  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('account.password');
  }

  login(){
    let isValid = false;
    if(!isValid){
      this.form.setErrors({
        invalidForm : true
      });
    }
    this.formArray.insert(1,new FormControl('myPassenger'));
    this.formArray.at(1);
    this.formArray.removeAt(1);
    this.formArray.push(new FormControl('myPassenger'));
    console.log(this.formArray);
  }

  setData(){
    this.form.setValue({
      account : {
        username : 'pratyush',
        password : 'Biswas'
      }
    });

    this.form.patchValue({
      account : {
        username : 'PiXL'
      }
    })
  }

}
