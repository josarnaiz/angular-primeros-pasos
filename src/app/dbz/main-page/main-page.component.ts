import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dmz.inteface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  /* get personajes(): Personaje[] {
    return this.dbzService.personajes;
  } */

  agregarNuevoPersonaje(personaje: Personaje) {
    //this.personajes.push(personaje);
  }

  constructor () {
    
  }
}
