import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{

  contactusForm!: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  public validationMessages = {
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    name: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'maxLength', message: 'Este campo permite máximo 30 caracteres' },
      { type: 'pattern', message: 'Este campo no permite caracteres especiales, por favor valide' }
    ],
    message: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'maxLength', message: 'Este campo permite máximo 100 caracteres' }
    ]
  }

  ngOnInit(): void {
   this.contactusForm = this.formBuilder.group({

    name: ['',
      [
        Validators.maxLength(30),
        Validators.required,
        Validators.pattern(/^[a-zA-ZáÁéÉíÍóÓúÚñÑ\s']+$/)
      ]
    ],
    email: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    message: ['',
      [
        Validators.maxLength(100),
        Validators.required
      ]
    ]

   })
  }

  contactus() {

    if (this.contactusForm.valid) {
      alert('El mensaje fue enviado con exito')
    }
    else {
      alert('Este formulario no es valido')
    }
  }

  public get campos() {
    return this.contactusForm.controls
  }

}
