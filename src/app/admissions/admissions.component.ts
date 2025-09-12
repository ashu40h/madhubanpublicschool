import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent implements OnInit {
  admissionForm: FormGroup;
  enquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.admissionForm = this.fb.group({
      studentName: ['', Validators.required],
      parentName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      classApplyingFor: ['', Validators.required],
      message: ['']
    });

    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Component initialization
  }

  onSubmit() {
    if (this.admissionForm.valid) {
      // Handle form submission
      console.log('Admission form submitted:', this.admissionForm.value);
      alert('Thank you for your application! We will contact you soon.');
      this.admissionForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  onSubmitAdmission() {
    if (this.admissionForm.valid) {
      // Handle form submission
      console.log('Admission form submitted:', this.admissionForm.value);
      alert('Thank you for your application! We will contact you soon.');
      this.admissionForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  onSubmitEnquiry() {
    if (this.enquiryForm.valid) {
      // Handle form submission
      console.log('Enquiry form submitted:', this.enquiryForm.value);
      alert('Thank you for your enquiry! We will contact you soon.');
      this.enquiryForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
