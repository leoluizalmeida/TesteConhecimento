import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-sup',
  templateUrl: './card-sup.component.html',
  styleUrls: ['./card-sup.component.css']
})
export class CardSupComponent implements OnInit {

  cards: any[] = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5}]

  constructor() { }

  ngOnInit(): void {
  }

}
