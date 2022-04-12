interface IAlumno {
    matricula: number;
    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    genero: string;
}

export class Alumno implements IAlumno {
    matricula: number;
    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    genero: string;
    
    constructor(
        matricula: number,
        nombre: string, 
        apellidos: string,
        fechaNacimiento: Date,
        genero: string
    ){
        this.matricula = matricula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
    }
}