import { Injectable } from '@angular/core';
import { MyData } from '../models/data.model';
@Injectable({
    providedIn : 'root'
})
export class ShareService {
    myData : MyData = new MyData();

    setData(data){
        this.myData.username = data.username;
        this.myData.isChecked = data.isChecked;
    }

    getData(){
        return {
            username : this.myData.username,
            password : this.myData.password,
            isChecked : this.myData.isChecked
        }
    }
}