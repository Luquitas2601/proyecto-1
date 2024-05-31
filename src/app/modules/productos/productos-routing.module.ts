import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from '../producto/pages/producto/producto.component';
import { BandaComponent } from '../producto/pages/banda/banda.component';
import { AlbumsComponent } from '../producto/pages/albums/albums.component';
import { PortadasComponent } from '../producto/pages/portadas/portadas.component';

const routes: Routes = [
  {
    path:"productos",component:ProductoComponent
  },

  {
     path:"banda",component:BandaComponent
  },
  {
    path:"albums",component:AlbumsComponent
  },
  {
    path:"portadas",component:PortadasComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
