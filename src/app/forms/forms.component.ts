import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  sabores: any = [];
  produto: any = [];
  sabor: string = "";
  select1: any = [];
  select2: any = "Selecione";
  @Input() nomeIn: string ="";
  nomeOu: string ="";
  @Input() emailIn: string="";
  emailOu: string="";
  @Input() endIn: string="";
  endOu: string="";
  @Input() obsIn: string="";
  obsOu: string="";

  produtos = [
    {
      id:0,
      tipo: 'Selecione',
      sabores: ['Selecione']
    },
    {
      id:1,
      tipo: 'Donut',
      sabores: ['Sonho de Valsa - R$16.90', 'Nutella com leite ninho - R$18.90', 'Doce de leite - R$12.90', 'Homer - R$12.30']
    },
    {
      id:2,
      tipo: 'Café',
      sabores: ['Frappuccino - R$16.90', 'Moccha - R$18.90', 'Café com leite - R$12.90', 'Cappuccino - R$12.30']
    },
    {
      id:3,
      tipo: 'Suco',
      sabores: ['Laranja - R$8.90', 'Pessêgo - R$8.90', 'Uva - R$8.90', 'Abacaxi com hortelã - R$10.90']
    },
  ];

  constructor(){}
    ngOnInit(){
      this.select1 = 0;
      this.sabores = this.produtos.filter((x) => x.id == this.select1)[0]
    }

    onChange(){
      this.select2 = ''
      this.sabores = this.produtos.filter((x) => x.id == this.select1)[0].sabores;
    }

    clickbutton(){
      this.produto = this.produtos.find((x) => x.id == this.select1)?.tipo;
      this.sabor = this.select2;
    }
}
