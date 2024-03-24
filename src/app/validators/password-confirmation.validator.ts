import { AbstractControl } from "@angular/forms";

export const passwordConfirmationValidator = (control: AbstractControl) => {
    let password = control?.get('password');
    let confirm_password = control?.get('confirmPassword');
    let doesNotMatch = password?.value !== confirm_password?.value;
    if (doesNotMatch) {
        control?.get('confirmPassword')?.setErrors({ passwordNotMatch: true });
    }
    return doesNotMatch ? { passwordNotMatch: true } : null;
}