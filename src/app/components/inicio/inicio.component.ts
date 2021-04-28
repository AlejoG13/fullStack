import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public bienvenida: string;

  constructor() {
    this.bienvenida = "Angular & Node";
  }

  ngOnInit(): void {
  }

}
