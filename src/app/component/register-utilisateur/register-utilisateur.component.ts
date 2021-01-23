import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-utilisateur',
  templateUrl: './register-utilisateur.component.html',
  styleUrls: ['./register-utilisateur.component.scss'],
})
export class RegisterUtilisateurComponent implements OnInit {
  registerForm = new FormGroup({
    addMail : new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
    pass:new FormControl('',[
      Validators.required
    ]),
    confPass: new FormControl('',[
      Validators.required
    ]),
    nom: new FormControl('',[
      Validators.required
    ]),
    prenom: new FormControl('',[
      Validators.required
    ])
    
  })
  constructor() { }

  ngOnInit() {}

  login(){
    
  }

}
