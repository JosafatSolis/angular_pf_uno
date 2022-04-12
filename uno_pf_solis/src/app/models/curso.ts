interface ICurso {
    id: number,
    nombre: string,
    descripcion: string
}

export class Curso implements ICurso {
    id: number;
    nombre: string;
    descripcion: string;

    constructor(
        id: number,
        nombre: string,
        descripcion: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}