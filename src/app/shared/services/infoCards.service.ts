import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IinfoCards } from '../models/infoCards.interface';


@Injectable({
    providedIn: 'root'
})



export class InfoCardsService {
    url = environment.dev;
    constructor(
        private http: HttpClient
    ) {
        
    }

    //Devuelve lista de fotos del carrusel
    public getInfoCardsRest(): Observable<IinfoCards[]> {
        const urlEndPoint: string = this.url + `infoCards`;
        return this.http.get<IinfoCards[]>(urlEndPoint);
    }
}