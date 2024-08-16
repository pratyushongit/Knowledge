import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';
@Injectable({
    providedIn : 'root'
})
export class ResolverService implements Resolve<any>{

    constructor(private service : CrudService){}

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<any>{
        return this.service.getData(route.paramMap.get('id'));
    }
}