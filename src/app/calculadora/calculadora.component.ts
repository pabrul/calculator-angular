import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from './../validacao.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  public resultado:string = "";
  public calc:string = "";

  constructor(private validacao:ValidacaoService) { }

  ngOnInit() {
  }

  public montarResultado(digito:string):void{
    if(this.validacao.ehValidaExpressao(digito,this.resultado)){
      this.resultado += digito;
    }
  }

  public finalizar():void{
    this.calc = eval(this.resultado).toString();
  }

  limpar(){
    this.resultado = "";
  }

  ehOperador(caractere:string):boolean{
    let ehOp = false;
    if(caractere=="+" || caractere=="-" || caractere=="*" || caractere=="/"){
      ehOp = true;
    }
    return ehOp;
  }

  ehZero(caractere:string):boolean{
    let ehZero = false;
    if(caractere=="0"){
      ehZero = true;
    }
    return ehZero;
  }

  ehZeroDepoisDeOperador(caractere:string, expressao:string):boolean{
    let ultimoCaractereDaExpressao = expressao.charAt(expressao.length-1);
    if (this.ehOperador(ultimoCaractereDaExpressao) && this.ehZero(caractere)){
      return true;
    }else {
      return false;
    }
  }

  ehOperadorDepoisDeOperador(caractere:string, expressao:string):boolean{
    let ultimoCaractereDaExpressao = expressao.charAt(expressao.length-1);
    if (this.ehOperador(ultimoCaractereDaExpressao) && this.ehOperador(caractere)){
      return true;
    }else {
      return false;
    }
  }

  ehValidaExpressao(caractere:string, expressao:string):boolean{
    let ehValida = true;
    if (expressao.length==0){
      if(this.ehOperador(caractere) || this.ehZero(caractere)){
        ehValida = false;
      }
    } else {
      if(this.ehZeroDepoisDeOperador(caractere,expressao)){
        ehValida = false;
      }
      else if(this.ehOperadorDepoisDeOperador(caractere,expressao)){
        ehValida = false;
      }
    }
    
    return ehValida;
  }
  
}

