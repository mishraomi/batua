import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card/card.service';
import { Router } from '@angular/router';

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

  cards: Card[]

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit() {
    this.refreshCards()
  }

  refreshCards(){
    this.cardService.getAllCards('firebolt').subscribe(
      response => {
        this.cards = response
      }
    )
  }

  deleteCard(id){
    this.cardService.deleteCard('firebolt', id).subscribe(
      response => {
        this.refreshCards();
      }
    )
  }

  updateCard(id){
    this.router.navigate(['card', id])
  }

  addCard(){
    this.router.navigate(['card', -1])
  }

}
