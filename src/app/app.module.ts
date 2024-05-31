import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { ProductoComponent } from './modules/producto/pages/producto/producto.component';
import { BandaComponent } from './modules/producto/pages/banda/banda.component';
import { AlbumsComponent } from './modules/producto/pages/albums/albums.component';
import { PortadasComponent } from './modules/producto/pages/portadas/portadas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    BandaComponent,
    AlbumsComponent,
    PortadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
