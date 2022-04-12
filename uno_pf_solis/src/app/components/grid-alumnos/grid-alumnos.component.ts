import { Component, Inject, Input, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-grid-alumnos',
  templateUrl: './grid-alumnos.component.html',
  styleUrls: ['./grid-alumnos.component.css']
})
export class GridAlumnosComponent implements OnInit {

  @Input() alumnos: Alumno[] = [
    new Alumno(123, "Juan", "Perez", new Date(), "Hombre"),
    new Alumno(321, "Pedro", "Lopez", new Date(), "Hombre"),
  ];

  constructor() {
    console.log(this.alumnos);
    
  }

  ngOnInit(): void {
    this.alumnos = [
      new Alumno(123, "Juan", "Perez", new Date(), "Hombre"),
      new Alumno(321, "Pedro", "Lopez", new Date(), "Hombre"),
    ];
  }

}
