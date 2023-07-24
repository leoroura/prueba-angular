import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from './models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: Producto[] = [];
  private carritoActualizado$ = new Subject<Producto[]>();

  constructor() { }

  getCarrito() {
    return [...this.carrito];
  }

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    this.carritoActualizado$.next([...this.carrito]);
  }

  getCarritoActualizadoListener() {
    return this.carritoActualizado$.asObservable();
  }
}