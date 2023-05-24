import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customValidator(control: AbstractControl): ValidationErrors | null {

    /// 0.0001
    let decRegex = /^[0](\.\d{4})$/;

    console.log("val  "+decRegex.test(control.value as string));
    

 const  hasError = control.value ? !decRegex.test(control.value as string): false;

    //const hasError = control.value ? (control.value as string).startsWith("abc") : false;

    return hasError ? {customValidator: true} : null;
}



export function customValidator100(control: AbstractControl): ValidationErrors | null {

    /// 100
    let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;

    console.log("val  "+decRegex.test(control.value as string));
    

    const  hasError = control.value ? !decRegex.test(control.value as string): false;

    //const hasError = control.value ? (control.value as string).startsWith("abc") : false;

    return hasError ? {customValidator: true} : null;
}

 

 
