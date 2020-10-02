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
  hasOperator(expression:string):boolean{
      let has:boolean = false;
      for(let i = 0; i < expression.length; i++){
        if(expression.charAt(i)=="+"){
          has = true;
          break;
        }
      }
    return has;
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
  isSecondNumber(expression:string):boolean{
    let sNumber:boolean = false;
    for(let i = 0; i < expression.length; i++){
      if(expression.charAt(i)=="+" && expression.charAt(i+1)== '1'){
        sNumber = true;
        break;
      }
    }
  return sNumber;
  }
  isOperatorAfterExpression(caracter:string, expression:string):boolean{
    if(this.ehOperador(caracter) && this.hasOperator(expression)){
      return true;
    }else return false;
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
      }else if (this.isOperatorAfterExpression(caractere,expressao)){
        ehValida = false;
      }
    }
    
    return ehValida;
  }
  isClear(caracter:string, mark:boolean):boolean{
    if((caracter == '1'||caracter == '0') && mark){
      return true;
    }else{
      return false;
    }
  }
}
