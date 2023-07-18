import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({

    email:[
      '',
      [          // validaciones
        Validators.required,
        Validators.email
      ]
    ],

    password:[
      '',
      [
       Validators.required,
       Validators.minLength( 8 )
      ]
    ]
  });

  constructor( private fb: FormBuilder) {}

  /** login */
  login() {
    console.group( 'loginForm' );
    console.info(this.loginForm.value);
    console.log(this.loginForm.valid);
    console.groupEnd();


  }

}
