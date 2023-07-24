import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './models/producto.model';

@Pipe({
  name: 'filterBySubcategoria'
})
export class FilterBySubcategoriaPipe implements PipeTransform {

  transform(productos: Producto[], subcategoriaId: number): Producto[] {
    if (!subcategoriaId) {
      return productos;
    }

    return productos.filter((producto) => producto.subcategoriaId === subcategoriaId);
  }
}