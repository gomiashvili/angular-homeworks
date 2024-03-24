import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordConfirmationValidator } from 'src/app/validators/password-confirmation.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  profileForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
        email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
        mobNumber: [, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern(/^995\d{9}$/)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!.:;,%*?&])[A-Za-z\d@$.,:;!%*?&]{6,}$/)]],
        confirmPassword: ['', Validators.required],
        company: ['', Validators.required],
      }, { validators: [passwordConfirmationValidator] });
  }

  ngOnInit(): void {
  }
  onFormSubmit() {
    console.log(this.profileForm.value)
  }
  get firstname() {
    return this.profileForm.get('firstName');
  }
  get lastname() {
    return this.profileForm.get('lastName');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get number() {
    return this.profileForm.get('mobNumber');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get confirmpassword() {
    return this.profileForm.get('confirmPassword');
  }
  get company() {
    return this.profileForm.get('company');
  }
}
