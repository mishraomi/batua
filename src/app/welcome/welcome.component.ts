import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loggedUser = ''

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.loggedUser = this.router.snapshot.params['name']
  }

}
