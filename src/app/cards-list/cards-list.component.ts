import { Component, OnInit } from '@angular/core';

export class Card {

  constructor(
    public id: number,
    public name: string,
    public expiration: Date
  ){ }
}

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})



export class CardsListComponent implements OnInit {

  cards = [
    new Card(1, 'ICICI', new Date()),
    new Card(2, 'Yes Bank', new Date()),
    new Card(3, 'Citi Bank', new Date())
  ]

  constructor() { }

  ngOnInit() {
  }

}
