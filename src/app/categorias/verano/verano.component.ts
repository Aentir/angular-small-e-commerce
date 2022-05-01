import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/shared/models/articulo.model';
import { ArticuloService } from 'src/app/shared/services/articulo.service';

@Component({
  selector: 'app-verano',
  templateUrl: './verano.component.html',
  styleUrls: ['./verano.component.scss']
})
export class VeranoComponent implements OnInit {

  articles: Articulo[] = [];
  
  constructor(
    private router: Router,
    private articuloService: ArticuloService
    
  ) { }

  ngOnInit(): void {
    this.getArticlesRest();
  }

  //Navega a la ruta especificada y coge el parámetro
  public navigateArticle(idArticle: number): void {
    this.router.navigate(['verano/articuloInfo', idArticle])
  }

  private getArticlesRest(){
    this.articuloService.getArticlesRest().subscribe(
      (data) => {
        data.forEach( (articulo) => {
             this.articles.push(articulo);
        })
      }
    )
  }
}