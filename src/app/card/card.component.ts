import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card/card.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../cards-list/cards-list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card
  id: number

  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.cardService.retrieveCard('firebolt', this.id).subscribe(
      data => this.card = data
    )
  }

}
