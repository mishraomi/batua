import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from 'src/app/cards-list/cards-list.component';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getAllCards(username){
    return this.http.get<Card[]>(`http://localhost:8080/users/${username}/cards`);
  }

  deleteCard(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/cards/${id}`);
  }

  retrieveCard(username, id){
    return this.http.get<Card>(`http://localhost:8080/users/${username}/cards/${id}`);
  }

  updateCard(username, id, card){
    return this.http.put(`http://localhost:8080/users/${username}/cards/${id}`, card);
  }

  addCard(username, card){
    return this.http.post(`http://localhost:8080/users/${username}/cards`, card);
  }

}
