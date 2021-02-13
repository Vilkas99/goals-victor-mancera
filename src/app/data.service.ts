import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private objetivos = new BehaviorSubject<any>(['Objetivo inicial']);
  objetivo = this.objetivos.asObservable();

  constructor() {}

  cambiarObjetivo(objetivo) {
    this.objetivos.next(objetivo);
  }
}
