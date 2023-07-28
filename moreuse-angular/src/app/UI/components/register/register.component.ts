import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usercase/userusecase';
//import { User } from 'src/app/domain/models/User/user';
//import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ]
  }
  constructor(private formBuilder: FormBuilder, private router: Router,private _userUseCase: Userusecase) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: [
        '', [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ] /*,
      confirmPassword: [
        '', [
          Validators.required,
         // Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ],*/
    })
  }

  public get campos() {
    return this.registerForm.controls
  }
  register(){
    if(this.registerForm.valid) {
      var name = this.registerForm.controls['name'].value;
      var phone = '310101011';
      var address = 'Calle 11 prueba';
      var email = this.registerForm.controls['email'].value;
      var password = this.registerForm.controls['password'].value;

      /*const user = new User();
      user.name = name;
      user.phone = phone;
      user.address = address;
      user.email = email;
      user.password = password;*/

     // this._userUseCase.register(user).subscribe((response: any) => {
      this._userUseCase.register(name, phone, address, email, password).subscribe((response: any) => {
        localStorage.setItem('user', response.User);
        if(response.user != ''){
          alert('Usuario creado exitosamente');
          this.router.navigate(['/fullscreen/login'])
        } else {
          alert('Verifique sus credenciales e intente de nuevo');
        }
      })
    }
    else {
      alert('Es formulario no es valido')
    }
  }
}
