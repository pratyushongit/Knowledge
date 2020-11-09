import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AsyncValidator{

    static checkElement(control : AbstractControl) : Promise<ValidationErrors | null> {
       return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(control.value == "pratyush"){
                resolve({checkElement : true});
            }
            else{
                resolve(null);
            }
        }, 1000);
       });
    }
}