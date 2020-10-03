import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from './../validacao.service';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-calculadorabi',
  templateUrl: './calculadorabi.component.html',
  styleUrls: ['./calculadorabi.component.scss']
})
export class CalculadorabiComponent implements OnInit {
  
  public resultado:string = "";
  public calc:string = "";
  public history:string = "";
  public flag:boolean = false;

  constructor(private validacao:ValidacaoService, private data: DatashareService) { }

  ngOnInit() {
    this.data.currentData.subscribe(history => this.history = history)
  }

  public montarResultado(digito:string):void{
    if (this.validacao.isClear(digito, this.flag)){
      this.resultado = "";
      this.flag = false
    }
    if(this.validacao.ehValidaExpressao(digito,this.resultado)){
      this.resultado += digito;
    }
    this.updateCalc(this.resultado);
  }
  public updateCalc(expression:string):void{
    if(this.validacao.isSecondNumber(expression)){
      let bin:string;
      bin = eval(this.resultado).toString();
      this.calc = this.corrigirBin(String(bin));
    }else{
      this.calc = "";
    }
  }

  public finalizar():void{
    let bin:string;
    let hide:any = document.getElementById("calc0");
    /*let hide2:any = document.getElementById("calc2");*/

    bin = eval(this.resultado).toString();
    this.flag = true;
    this.calc = this.corrigirBin(String(bin));
    this.history += this.resultado+"= "+this.calc+"\n";
    hide.style.display = "block";
    /*hide2.style.display = "block";*/
    this.data.changeData(this.history);
  }

  public corrigirBin(binario:string):string{
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
    let hide:any = document.getElementById("calc0");
    /*let hide2:any = document.getElementById("calc2");*/
    hide.style.display = "none";
    /*hide2.style.display = "none";*/
    if (option == 'C'){
      this.resultado = "";
      this.calc = "";
      this.history = "";
      this.data.changeData(this.history);
    }else{
    this.resultado = "";
    this.calc = "";
    }
  }



}
