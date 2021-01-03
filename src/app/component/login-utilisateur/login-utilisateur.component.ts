import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-utilisateur',
  templateUrl: './login-utilisateur.component.html',
  styleUrls: ['./login-utilisateur.component.scss'],
})
export class LoginUtilisateurComponent implements OnInit {

  loginForm = new FormGroup({
    addMail : new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
    pass:new FormControl('',[
      Validators.required
    ])
  })

  constructor(private authService:AuthService) { }

  ngOnInit() {}

  login(){

    this.authService.login(this.loginForm.value.addMail,this.loginForm.value.pass).subscribe(
      (resp)=>{
   
      }
    )
  }

}
