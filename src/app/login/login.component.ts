import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { valores, valoresPost } from './Model/resposta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public servico: ServerService) {

  }

  val: valores[] = []
  client: valoresPost = {} as valoresPost;
  clientResult: valoresPost = {} as valoresPost;
  vEmail: string = "";
  vSenha: string = "";
  vFirstName: string = "";
  vLastName: string = "";

  chamadaBackPost(){
    this.val = [];
    this.clientResult = {} as valoresPost;
    //this.client = { email: this.vEmail, senha: this.vSenha, first_name: this.vFirstName, last_name: this.vLastName };
    this.client = { first_name: this.vFirstName, last_name: this.vLastName, email: this.vEmail, senha: this.vSenha };
    this.servico.postUsuario(this.client).subscribe(
      (resp: any)=>{
        this.clientResult = (resp);
        console.log(this.clientResult);
      }
    )
  }
}
