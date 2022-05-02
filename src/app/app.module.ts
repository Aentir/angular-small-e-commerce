import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { VeranoComponent } from './categorias/verano/verano.component';
import { ArticulosInfoComponent } from './articulo/articulos-info/articulos-info.component';
import { CarouselComponent } from './tienda/carousel/carousel.component';
import { InfoCardsComponent } from './tienda/info-cards/info-cards.component';
import { CategoriasComponent } from './tienda/categorias/categorias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TiendaComponent,
    NosotrosComponent,
    VeranoComponent,
    ArticulosInfoComponent,
    CarouselComponent,
    InfoCardsComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
