import { Component } from '@angular/core';
import { CarritoService } from './carrito.service';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-angular';
  cantidadEnCarrito: number = 0;

  constructor(private carritoService: CarritoService) {
    this.carritoService.getCarritoActualizadoListener().subscribe(
      (carrito: Producto[]) => {
        this.cantidadEnCarrito = carrito.length;
      }
    );
  }
}