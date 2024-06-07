import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
   hide=true

usuarios:Usuario={
  uid: "",
  nombre: "",
  apellido: "",
  email: "",
  rol: "",
  password: "",
};
coleccionusuarios: Usuario []=[];
registrar(){
  const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.nombre,
    apellido: this.usuarios.apellido,
    email:this.usuarios.email,
    rol: this.usuarios.rol,
    password:this.usuarios.password,
  }

  for(let i = 0;i < this.coleccionusuarios.length;i++){
    const usuariolocal=this.coleccionusuarios[i];

    if(usuariolocal.nombre === credenciales.nombre &&
      usuariolocal.apellido === credenciales.apellido &&
      usuariolocal.email === credenciales.email &&
      usuariolocal.rol === credenciales.rol &&
      usuariolocal.password === credenciales.password
    ){
      alert("INICIASTE SESION CORRECTAMENTE ");
      break;
    }else{
      alert("no se pudo iniciar sesion");
      break
    }
  }
  this.coleccionusuarios.push(credenciales);
  console.log(credenciales)

}

}
 