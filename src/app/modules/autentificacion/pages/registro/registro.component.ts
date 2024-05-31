import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //hide es para el input de la contraseña

  hide = true;
  //importacion del modelo/interfaz

usuario:Usuario={
  uid:"",
  nombre:"",
  apellido:"",
  email:"",
  rol:"",
  password:"",
}

//crear coleccion para usuarios
coleccionusuarios: Usuario[]=[];
//funcion para registro
registrar(){
   const credenciales={
    uid:this.usuario.uid,
    nombre:this.usuario.nombre,
    apellido:this.usuario.apellido,
    email:this.usuario.email,
    rol:this.usuario.rol,
    password:this.usuario.password
   }
   //enviamos los nuevos registros por medio del metodo push a la coleccion 
   this,this.coleccionusuarios.push(credenciales);
   //por consola
   console.log(credenciales)
   console.log(this.coleccionusuarios)

}

}
