import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bottom',
  templateUrl: './card-bottom.component.html',
  styleUrls: ['./card-bottom.component.css']
})
export class CardBottomComponent implements OnInit {

  cards: any[] = [{id: 1},{id: 2},{id: 3},{id: 4}]

  constructor() { }

  ngOnInit(): void {
  }

}
