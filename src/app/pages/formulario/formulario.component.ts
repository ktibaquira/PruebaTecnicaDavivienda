import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidations } from 'src/app/utilities/MyValidations';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  valid!: Boolean | null;

  formulario = {
    nombre: '',
    tipoDocumento: '',
    numeroDocumento: '',
    ciudad: '',
    calleCarrera: '',
    numeroCalleCarrera: '',
    especificacionCalle: '',
    especificacionCarrera: '',
    numeroCelular: '',
  };

  constructor(
    private router: Router //hacer redireccion por codigo
  ) {}

  ngOnInit(): void {}
  guardar() {
    this.router.navigate(['/home']);
  }

  validado() {
    var valid = '';
    if (this.formulario.numeroCelular === '') {
      this.valid = false;
      return valid;
    } else if (!this.formulario.numeroCelular.startsWith('3')) {
      this.valid = false;
      valid = '3';
    } else if (!_isNumberValue(this.formulario.numeroCelular)) {
      this.valid = false;
      valid = 'letra';
    } else {
      this.valid = true;
    }

    return valid;
  }
}
