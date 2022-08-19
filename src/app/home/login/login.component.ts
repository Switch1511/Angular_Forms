import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authService:AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.usuario,this.senha).subscribe({
      next: () => console.log("Deu boa"),
      error: (error) => console.log(error)
    })
  }

}
