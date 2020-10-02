import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from './../validacao.service';
@Component({
  selector: 'app-calculadorabi',
  templateUrl: './calculadorabi.component.html',
  styleUrls: ['./calculadorabi.component.scss']
})
export class CalculadorabiComponent implements OnInit {

  public resultado:string = "";
  public calc:string = "";
  public history:string= "";

  constructor(private validacao:ValidacaoService) { }

  ngOnInit(): void {
  }

  public montarResultado(digito:string):void{
    if(this.validacao.ehValidaExpressao(digito,this.resultado)){
      this.resultado += digito;
    }
  }

  public finalizar():void{
    let bin:string;

    bin = eval(this.resultado).toString();
    
    this.calc = this.corrigirBin(String(bin));
    this.history += this.resultado+"= "+this.calc+"\n";
  }

  corrigirBin(binario:string){
    let corrigido:string = "";
    let aux:Number = 0;
    for(let i = binario.length-1; i >= 0; i--){
      let numero:any = parseInt(binario.charAt(i));
      let somaBin:any = numero + aux;
      if(somaBin>= 2){
        corrigido += somaBin % 2;
        aux = 1;
      }else{
        corrigido += Number(binario[i]);
        aux = 0;
      }
    }
    if (aux != 0)
      corrigido += aux;
    return corrigido.split("").reverse().join("");
  }

  limpar(option:string){
    if (option == 'CE'){
      this.resultado = "";
      this.calc = "";
      this.history = "";
    }else{
    this.resultado = "";
    this.calc = "";
    }
  }

}
