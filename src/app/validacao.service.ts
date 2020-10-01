import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  constructor() { }


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
