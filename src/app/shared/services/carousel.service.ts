import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICarousel } from '../models/carousel.interface';

@Injectable({
    providedIn: 'root'
})

export class CarouselService {
    url = environment.dev;
    constructor(
        private http: HttpClient
    ) {
        
    }

    public getCarouselPicturesRest(): Observable<ICarousel[]> {
        const urlEndPoint: string = this.url + `carousel`;
        return this.http.get<ICarousel[]>(urlEndPoint);
    }
}