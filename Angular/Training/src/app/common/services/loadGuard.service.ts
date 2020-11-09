import { CanLoad, UrlSegment } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

export class loadGuard implements CanLoad{
    constructor(){}
    canLoad(route : Route, segments : UrlSegment[]) : boolean{
        if(!true){
            return false;
        }
        return true;
    }
}