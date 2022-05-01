import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { VeranoComponent } from './categorias/verano/verano.component';
import { ArticulosInfoComponent } from './articulo/articulos-info/articulos-info.component';

const routes: Routes = [
  { path: '', component: TiendaComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'verano', component: VeranoComponent},
  { path: 'verano/articuloInfo/:idArticle', component: ArticulosInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
