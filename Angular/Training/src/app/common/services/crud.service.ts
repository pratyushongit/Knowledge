import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { map,filter,reduce, retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http : HttpClient) { }

  // Promise
  getTodoPromise() : Promise<any>{
    let url = 'https://jsonplaceholder.typicode.com/todos';
    return fetch(url).then((data)=>{
      return data.json().then((data)=>{
          return data;
      });
    });
  }

    // Observable of above Promise
    getTodoObs() : Observable<any>{
      let url = 'https://jsonplaceholder.typicode.com/todos';
      return from(fetch(url).then((data)=>{
        return data.json().then((data)=>{
            return data;
        });
      }));
    }

  // CREATE
  postData() : Observable<any>{
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    let payload = {
      username : 'pratyush',
      password : 'biswas'
    }
    return this.http.post(url,JSON.stringify(payload),{responseType : 'text'});
  }

  // READ
  getData(data?) : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(catchError(this.handleError));
  }

  // UPDATE

  updateData() : Observable<any>{
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    let payload = {
      username : 'pratyush',
      password : 'biswas'
    }
    return this.http.patch(url,JSON.stringify(payload));
  }

  // DELETE

  deleteData() : Observable<any>{
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.delete(url);
  }

  // Set Headers and Query Params
  setData() : Observable<any>{
    // Headers
    // let headers = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //    Authorization : 'token'
    // });
    // OR
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    headers = headers.append('Authorization','token');


    // Params
    // let params = new HttpParams();
    // params = params.append('name','Pratyush');
    // params = params.append('age','10');    
    // OR
    let params = new HttpParams({fromObject : {'name': 'Pratyush', 'age' : '10'}});
    //OR
    // let params = new HttpParams({fromString : 'name=Pratyush&age=10'});

    let url = 'https://jsonplaceholder.typicode.com/todos';
    let payload = {
      username : 'pratyush',
      password : 'biswas'
    }
    return this.http.get(url,{ headers,params, responseType : 'json'});
    // return this.http.post(url,JSON.stringify(payload),{ headers,params, responseType : 'text'});
  }

  // Modify Headers and Query Params
  modifyData() : Observable<any>{
    let url = 'https://jsonplaceholder.typicode.com/todos';
    let payload = {
      username : 'pratyush',
      password : 'biswas'
    }

    let headers = new HttpHeaders();
    headers = headers.append('Authorization','token');

    //Modifying Headers
    headers = headers.set('Authorization','xsrf-token');


    let params = new HttpParams();
    params = params.append('name','Pratyush');

    // Modifying Params
    params = params.set('name','Biswas');


    let options = {headers , params};
    return this.http.get(url,options);
    // return this.http.patch(url,JSON.stringify(payload),options);
  }

  handleError(error : HttpErrorResponse){
    let errorMsg = "";
    if(error.status == 404){
        errorMsg = "Not Found -> !Interceptor";
    }
    else if(error.status == 400){
        errorMsg = "Bad Request -> !Interceptor";
    }
    else if(error.status == 500){
        errorMsg = "Internal Server Error -> !Interceptor";
    }
    else{
        errorMsg = "Something Bad Happened! -> !Interceptor"
    }
    return throwError(errorMsg);
  }

  // Mock Query Param Service
  mockData(data?){
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url);
  }
}
