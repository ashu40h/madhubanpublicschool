import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports:  [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
   



  contactForm:any|  FormGroup | undefined;
  registrationForm: FormGroup;

  
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      studentName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      grade: ['', Validators.required],
      previousSchool: [''],
      studentId: [''],
      parentName: ['', Validators.required],
      relationship: ['', Validators.required],
      occupation: [''],
      parentAddress: ['', Validators.required],
      parentPhone: ['', Validators.required],
      parentEmail: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
   onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Registration submitted!');
      this.registrationForm.reset();
    }else{
      alert("pls fill the details");
    }
  }




}
