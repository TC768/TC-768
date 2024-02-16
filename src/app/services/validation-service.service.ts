import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() {}

  validateField(field: FormControl): string {
    const errors = field.errors;

    if (!errors) {
      return '';
    }

    if (errors['required']) { // Acceso a la propiedad 'required' usando corchetes
      return 'El campo es obligatorio';
    }

    if (errors['minlength']) {
      return `El campo debe tener al menos ${errors['minlength']} caracteres`;
    }

    if (errors['maxlength']) {
      return `El campo debe tener como máximo ${errors['maxlength']} caracteres`;
    }

    return '';
  }

}
