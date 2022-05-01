import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/shared/models/carousel.model';
import { CarouselService } from 'src/app/shared/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  pictures: Carousel[] = [];

  constructor(
    private carouselService: CarouselService
  ) { }

  ngOnInit(): void {
    this.getCarouselPicturesRest();
  }

  private getCarouselPicturesRest() {
    this.carouselService.getCarouselPicturesRest().subscribe(
      (data) => {
        data.forEach((pictures) => {
          this.pictures.push(pictures);
        });
      }
    )
  }

}
