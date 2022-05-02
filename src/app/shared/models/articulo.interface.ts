export interface IArticulo {
    id: number;
    nombre: string;
    precio: number;
    precioOferta: number;
    descripcion?: string;
    imagen?: string;
    favourite: boolean;
}