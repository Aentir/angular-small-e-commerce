import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/shared/models/articulo.model';
import { ArticuloService } from 'src/app/shared/services/articulo.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-articulos-info',
  templateUrl: './articulos-info.component.html',
  styleUrls: ['./articulos-info.component.scss']
})
export class ArticulosInfoComponent implements OnInit {

  favourite = faStar;

  article: Articulo = new Articulo();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticuloService
  ) { }

  ngOnInit(): void {
    let idArticle = this.route.snapshot.paramMap.get('idArticle');
    this.articleService.getSummerArticleById(idArticle).subscribe((data: any) => {
      this.article = data[0];
    });
  }

}
