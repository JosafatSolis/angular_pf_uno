import { Curso } from './curso';

interface IClase {
    id: number
    curso: Curso
    instructor: string
    fechaInicio: Date
    fechaFin: Date
}

export class Clase implements IClase {
    id: number;
    curso: Curso;
    instructor: string;
    fechaInicio: Date;
    fechaFin: Date;

    constructor(
        id: number,
        curso: Curso,
        instructor: string,
        fechaInicio: Date,
        fechaFin: Date
    ) {
        this.id = id;
        this.curso = curso;
        this.instructor = instructor;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin
    }

}

