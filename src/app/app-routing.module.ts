import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  //ruta comun => componente
  {
    path:"",component:InicioComponent
  },
  // carga peresoza => ruta que te lleva a un moudulo especifico 
  // loadchildren: indica que habra una ruta hija
  // ()=> import: funcion flecha que importa desde la ruta 
  // .then: funcion asincronica del tipo PROMESA
  {
    path:"",loadChildren:()=>import(`./modules/inicio/inicio.module`).then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import(`./modules/productos/productos.module`).then(m=>m.ProductosModule)
  },
  {
    path:"",loadChildren:()=>import(`./modules/autentificacion/autentificacion.module`).then(m=>m.AutentificacionModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
