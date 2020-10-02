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

}
