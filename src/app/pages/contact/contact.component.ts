import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//import { Resend } from 'resend';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}$/)]],
      message: ['', Validators.required],
      sentMessage: false
    })
  }

  ngOnInit(): void {
    emailjs.init('NBvhTY1DFADgXV8bV'); // tu User ID de EmailJS
  }

  async set() {
    if (!this.form.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.',
      });
      return;
    }

    this.mostrarError = false;

    // utiliazr email js para hacer el envio de correo

    const serviceID = 'default_service';
    const templateID = 'template_lm2notm';

    const formData = {
      from_name: this.form.value.name,
      to_name: this.form.value.lastName,
      message: this.form.value.message,
      reply_to: this.form.value.email,
      phone: this.form.value.phone
    };

    try {
      const response: EmailJSResponseStatus = await emailjs.send(serviceID, templateID, formData);
      this.form.reset();
      this.form.patchValue({ sentMessage: true });
      Swal.fire({
        icon: 'success',
        title: 'Enviado',
        text: 'Tu mensaje ha sido enviado con éxito!',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      });
    }
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
