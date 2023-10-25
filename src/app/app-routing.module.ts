import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeralComponent } from './geral/geral.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component:GeralComponent},
  {path: 'cardapio', component:CardapioComponent},
  {path: 'contato', component:ContatoComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
