import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  profileForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
      email: ['', [Validators.required, Validators.email]],
      mobNumber: [, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern(/^995\d{9}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!.,%*?&])[A-Za-z\d@$.,!%*?&]{6,}$/)]],
      confirmPassword: ['', Validators.required],
      company: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
