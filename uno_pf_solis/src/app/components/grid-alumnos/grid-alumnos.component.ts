import { Component, Inject, Input, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-grid-alumnos',
  templateUrl: './grid-alumnos.component.html',
  styleUrls: ['./grid-alumnos.component.css']
})
export class GridAlumnosComponent implements OnInit {

  displayedColumns: string[] = ["matricula", "nombre", "apellidos"]
  selectedRow: any;

  @Input() alumnos: Alumno[] = [
    {matricula: 123, nombre: "Juan", apellidos: "Perez", fechaNacimiento: new Date(), genero: "Hombre"},
    {matricula: 321, nombre: "Pedro", apellidos: "Lopez", fechaNacimiento: new Date(), genero: "Hombre"},
  ];

  constructor() {
    console.log(this.alumnos);
    
  }

  ngOnInit(): void {
  }

  changeRowSelected(row: any) {
    this.selectedRow = row;
  }
  
}
