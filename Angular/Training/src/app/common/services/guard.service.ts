import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CrudService } from './crud.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate {

    constructor(private service: CrudService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
        return this.service.getData().pipe(map(el => {
            if(el.id == 1){
                // let url = state.url;
                // this.router.navigate([url]);
                return true;
            }
            this.router.navigate(['/not-found']);
            return false;
        }));
    }
}