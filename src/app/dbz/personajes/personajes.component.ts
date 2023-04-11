import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dmz.inteface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  @Input('data') personajes: Personaje[] = [];
}
