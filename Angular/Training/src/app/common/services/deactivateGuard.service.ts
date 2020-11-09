import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ReactiveComponent } from '../../reactive-forms/reactive.component';

export class DeactivateGuard implements CanDeactivate<ReactiveComponent>{
    constructor(){}   

    canDeactivate(component : ReactiveComponent , currentRoute : ActivatedRouteSnapshot, currentState : RouterStateSnapshot, nextState : RouterStateSnapshot) : boolean{
        if(component.form.get('account.username').dirty){
            return false;
        }
        else{
            return true;
        }
    }
}