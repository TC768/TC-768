import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//import { Resend } from 'resend';
import {CommonModule} from '@angular/common';

import Swal from 'sweetalert2'

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

  //private resend = new Resend('re_eBXkB2Hs_4H3Pb4pVLmkVtNHooEur9aSo');

// private resend = new Resend('d2cf9f60-e878-42b1-b24c-1434624a0e7f');

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

  async set(){
    if (!this.form.valid) {
      this.mostrarError = true;
      return;
    }

    this.mostrarError = false;

    // utiliazr email js para hacer el envio de correo


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
