import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public data:string;
  public operations:string[];

  constructor(private datas: DatashareService) { }

  ngOnInit() {
    this.datas.currentData.subscribe(data => this.data = data);
    this.generateHTML();
  }
  
  separeteOperations(expression:string):string[]{
    let separeted:string[] = expression.split('\n');
    return separeted
  }
  generateHTML():void{
    let array:string[] = this.separeteOperations(this.data);
    array.pop();
    this.operations = array
    console.log(array);
    console.log(this.operations);  
  }
  clearArray(ar:string[]):void{
    let length:number = ar.length;
    let i:number;

    for(i = 0; i < length; i++){
      ar.pop();
    }
  }
  limpar(){
    //this.hideResul();
      this.clearArray(this.operations);
      this.data = "";
      this.datas.changeData(this.data);
  }
  
}
