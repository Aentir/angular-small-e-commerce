export class Categoria {
    path: string;
    nombre: string;
    descripcion: string;
    imagen: string;

  constructor(
    path: string, 
    nombre: string, 
    descripcion: string, 
    imagen: string
) {
    this.path = path
    this.nombre = nombre
    this.descripcion = descripcion
    this.imagen = imagen
  }
}