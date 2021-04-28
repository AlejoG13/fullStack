import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  public titulo: string;

  constructor() {
    this.titulo = 'FullStack'
  }

  ngOnInit(): void {
  }

}
