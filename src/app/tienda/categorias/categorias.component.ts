import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { CategoriasService } from 'src/app/shared/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.getCategoriasRest();
  }

  private getCategoriasRest() {
    this.categoriasService.getCategoriasRest().subscribe(
      (data) => {
        data.forEach( (categoria: Categoria) => {
          
          /*Preguntar porque se vuelve a mapear*/
          //const categoriaToInclude: Categoria = new Categoria(categoria.path, categoria.nombre, categoria.descripcion, categoria.imagen);
          this.categorias.push(categoria);
          
        })
      }
    )
  }

}
