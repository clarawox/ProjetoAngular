import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeralComponent } from './geral/geral.component';
import { FootComponent } from './foot/foot.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './contato/contato.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GeralComponent,
    FootComponent,
    FormsComponent,
    ContatoComponent,
    CardapioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
