import { AbstractControl, ValidationErrors } from '@angular/forms';


export class CheckSpaceValidator{
    static checkSpace(control : AbstractControl) : ValidationErrors | null{
        if((<string>control.value).includes(' ')){
            return { checkSpace : true };
        }
        return null;
    }
}