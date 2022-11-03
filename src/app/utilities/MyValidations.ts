import { AbstractControl } from '@angular/forms';
import { __values } from 'tslib';

export class MyValidations {
    static startsWithThree(control: AbstractControl){
        const valor = control.value;
        if(valor.startsWith(3)){
            return {startsWithThree: true}
        }
        return null;
    }
}
