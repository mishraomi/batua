import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../cards-list/cards-list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card
  id: number

  constructor(private cardService: CardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.card = new Card(this.id, '', new Date())
    if(this.id != -1){
      this.cardService.retrieveCard('firebolt', this.id).subscribe(
        data => this.card = data
      )
    }
  }

  saveCard(){
if(this.id === -1){
  this.cardService.addCard('firebolt', this.card).subscribe(
    response => {
      console.log(response)
      this.router.navigate(["cards"])
    }
  )
}
else {
  this.cardService.updateCard('firebolt', this.id, this.card).subscribe(
    response => {
      console.log(response)
      this.router.navigate(["cards"])
    }
  )
}

    
  }

}
