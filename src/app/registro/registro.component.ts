import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  registerForm: FormGroup; //registerForm: FormGroup es para que se pueda usar en el html y quiere decir que es un formulario

  //en el constructoe estoy creando un formulario con los campos que se van a llenar
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: '',
      lastName: '',
      age: '',
      birthdate: '',
      email: this.emailFormControl,
      nickname: '',
      phone: '',
      password: ''
    });
  }

  register(){
    const formValue = this.registerForm.value;
    console.log(formValue);
  }
}
