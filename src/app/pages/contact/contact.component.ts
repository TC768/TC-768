import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form: FormGroup;

  mostrarError: boolean = false;

  validationMessages: { [key: string]: { [key: string]: string } } = {
    name: {
      required: 'Nombre es requerido'
    },
    lastName: {
      required: 'Apellido es requerido'
    },
    email: {
      required: 'Correo es requerido',
      email: 'Invalid email format.'
    },
    phone: {
      required: 'Teléfono es requerido',
      pattern: 'Formato de teléfono inválido. Debe ser ####-####.'
    },
    message: {
      required: 'Mensaje es requerido'
    }
  };

  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}$/)]],
      message: ['', Validators.required],
      sentMessage : false
    })
  }

  set(){
    if (!this.form.valid) {
      this.mostrarError = true;
      return;
    }

    this.mostrarError = false;
    console.log("Formulario enviado");
  }


  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);
    for (const errorKey in control?.errors) {
      if (control.errors.hasOwnProperty(errorKey) && (control.touched || control.dirty)) {
        return this.validationMessages[controlName][errorKey];
      }
    }
    return null;
  }

}
