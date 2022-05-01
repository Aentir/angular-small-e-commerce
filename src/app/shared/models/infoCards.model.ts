export class InfoCards {
    id: number;
    descripcion: string;
    imagen: string;

    constructor(
        id: number,
        descripcion: string,
        imagen: string,
    ) {
        this.id = id
        this.descripcion = descripcion
        this.imagen = imagen
    }
}