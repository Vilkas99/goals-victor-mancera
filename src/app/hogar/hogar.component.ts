import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.scss'],
  animations: [
    trigger('objetivos', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('300ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('300ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HogarComponent implements OnInit {
  contadorItems: number;
  btnTexto: string = 'Añadir un item';
  textoObjetivo: string = 'Mi primer objetivo de vida';
  objetivos = [];

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.contadorItems = this.objetivos.length;
    this._data.objetivo.subscribe((res) => (this.objetivos = res));
    this._data.cambiarObjetivo(this.objetivos);
    this.contadorItems = this.objetivos.length;
  }

  addItem() {
    this.objetivos.push(this.textoObjetivo);
    console.log(this.objetivos);
    this.textoObjetivo = '';
    this.contadorItems = this.objetivos.length;
    this._data.cambiarObjetivo(this.objetivos);
  }

  eliminarItem(i) {
    this.objetivos.splice(i, 1);
    this._data.cambiarObjetivo(this.objetivos);
  }
}
