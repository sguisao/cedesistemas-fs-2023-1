//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usercase/userusecase';
import { Token } from 'src/app/domain/models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  public validationMessages = {
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo es debe contener por lo menos 8 caracteres' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ]
  }
  //constructor(private formBuilder: FormBuilder, private router: Router, private http:HttpClient) { }
  constructor(private formBuilder: FormBuilder, private router: Router, private _userUseCase: Userusecase) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]
      ],
      password: [
        '', [
          Validators.minLength(8),
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ]
    })
  }

  /*login() {
    var correo = this.loginForm.controls['email'].value;
    var password = this.loginForm.controls['password'].value;

    this.http.get('https://run.mocky.io/v3/616d0f56-99a0-4f96-a98a-c9d14ce7df6f').subscribe({
      next: (response) => console.log(response),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

    this.http.post('https://run.mocky.io/v3/616d0f56-99a0-4f96-a98a-c9d14ce7df6f',{email:correo,contraseña:password}).subscribe({
      next: (response) => console.log(response),
      error: (e) => console.error(e),
      complete: () => console.info('llamado al login completado')
    })

    if (this.loginForm.valid) {
        this.router.navigate(['/']);
      }
      else {
        alert('Este formulario no es valido');
      }
    }*/

    login() {
      var email = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;
      this._userUseCase.login(email, password).subscribe({
        next: (response: Token) => {
          if (response.token != '') {
            localStorage.setItem('token', response.token)
            this.router.navigate(['/'])
          }
          else {
            alert('Usuario o contraseña incorrecta,verifique e intente de nuevo')
          }
        },
        error: (response) => {
          alert(response.message)
        },
        complete: () => this.router.navigate(['/'])
      })

    }

    public get campos() {
      return this.loginForm.controls
    }
  }
