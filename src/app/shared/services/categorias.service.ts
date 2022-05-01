import { Injectable } from '@angular/core';
import { ICategoria } from '../models/categoria.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})



export class CategoriasService {
    url = environment.dev;
    constructor(
        private http: HttpClient
    ) {
    }

    //Devuelve lista de categorias
    public getCategoriasRest(): Observable<ICategoria[]> {
        const urlEndPoint: string = this.url + `categorias`;
        return this.http.get<ICategoria[]>(urlEndPoint);
    }
}