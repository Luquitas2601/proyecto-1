import { Component } from '@angular/core';
//
import { bandas } from 'src/app/models/bandas';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // propiedad publica
public info:bandas[];
constructor(){
  this.info = [
    {
      id:"",
      nombre:"Patricio Rey y Sus Redonditos de Ricota ",
      tipo:"Rock Alternativo",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAC2czsXdn-5Mm4DoDY7V1l6m8ghAsjICYcK9dEWLifQ&s",
      albums:10,
      alt:""
    },
    {
      id:"",
      nombre:"Machine Head",
      tipo:"Groove Metal ",
      imagen:"https://i.pinimg.com/736x/ee/1b/9e/ee1b9ee883d83cdea8d505d35e33deb9.jpg",
      albums:10,
      alt:""
    },
    {
      id:"",
      nombre:"Black Label Society",
      tipo:"Groove Metal",
      imagen:"https://i.ytimg.com/vi/a-ZnmXlz63M/hqdefault.jpg",
      albums:12,
      alt:""
    }

  ]
}
}
