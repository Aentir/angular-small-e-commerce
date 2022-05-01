import { Component, OnInit } from '@angular/core';
import { InfoCards } from 'src/app/shared/models/infoCards.model';
import { InfoCardsService } from 'src/app/shared/services/infoCards.service';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent implements OnInit {

  infoCards: InfoCards[] = [];

  constructor(
    private infoCardsService: InfoCardsService
  ) { }

  ngOnInit(): void {
    this.getInfoCardsRest();
  }

  private getInfoCardsRest() {
    this.infoCardsService.getInfoCardsRest().subscribe(
      (data) => {
        data.forEach((infoCards: InfoCards) => {
          this.infoCards.push(infoCards);
        })
      }
    )
  }

}
