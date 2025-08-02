import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

   contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  onSubmit(): void {
  console.log('Button clicked!',this.contactForm.value);  // Basic test to check if it's working
}

//   onSubmit() {
//     if (this.contactForm.valid) {
//       console.log('Form Data:', this.contactForm.value);
//       // You can send the form data to a backend here
//     }

    
// }
}
