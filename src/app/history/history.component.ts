import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public data:string;

  constructor(private datas: DatashareService) { }

  ngOnInit() {
    this.datas.currentData.subscribe(data => this.data = data)
  }
  separeteOperations(expression:string):string[]{
    let separeted:string[] = expression.split('\n');
    return separeted
  }
  generateHTML():void{
    let array:string[] = this.separeteOperations(this.data);
    let i:number;
    let divId = document.getElementById("line-new");
    divId.innerHTML = "";
    for(i = 0; i < array.length; i++){
      divId.innerHTML += "<div class='new-line' id='line-new"+i+">"+array[i]+"</div>"
    }
  }
}
