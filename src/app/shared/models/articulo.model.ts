export class Articulo {
    id: number;
    nombre: string;
    precio: number;
    precioOferta: number;
    descripcionArticulo?: string;
    imagen?: string;
    favourite: boolean;

    constructor(
    ) {
        this.id = 0;
        this.nombre = '';
        this.precio = 0;
        this.precioOferta = 0;
        this.descripcionArticulo = '';
        this.imagen = '';
        this.favourite = true;
    }

}