import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn  : "root"
})
export class InjectibleService {

    constructor(private http : HttpClient){}
    
    getData(){
        return [1,2,3,4,5];
    }
}