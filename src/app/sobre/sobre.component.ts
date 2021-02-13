import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  objetivos: any;

  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private _data: DataService
  ) {
    this.ruta.params.subscribe((res) => console.log(res.id));
  }

  ngOnInit(): void {
    this._data.objetivo.subscribe((res) => (this.objetivos = res));
  }

  enviarCasa() {
    this.router.navigate(['']);
  }
}
