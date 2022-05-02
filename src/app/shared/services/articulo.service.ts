import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticulo } from '../models/articulo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  url = environment.dev;
  constructor(

    private http: HttpClient
  ) { }

  public getSummerArticlesRest(): Observable<IArticulo[]> {
    const urlEndPoint: string = this.url + `verano`;
    return this.http.get<IArticulo[]>(urlEndPoint);
  }

  public getSummerArticleById(id: any): Observable<IArticulo> {
    const urlEndPoint: string = this.url + `verano/articuloInfo/${id}`;
    console.log(urlEndPoint);
    return this.http.get<IArticulo>(urlEndPoint);
  }

}
