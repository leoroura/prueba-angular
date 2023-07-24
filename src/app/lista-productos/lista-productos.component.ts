import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../models/producto.model';
import { Subcategoria } from '../models/subcategoria.model';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];
  subcategorias: Subcategoria[] = [];

  cantidadEnCarrito: number = 0;

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.obtenerProductos();
    this.obtenerSubcategorias();
    this.carritoService.getCarritoActualizadoListener().subscribe(
      (carrito: Producto[]) => {
        this.cantidadEnCarrito = carrito.length;
      }
    );
  }

  obtenerProductos() {
    this.productosService.getProductos().subscribe(
      (data: any) => {
        this.productos = data.map((producto: Producto) => {
          return {
            ...producto,
            imagenMed: producto.imagen.replace('.jpg', '-med.jpg')
          };
        });
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

  obtenerSubcategorias() {
    this.productosService.getSubcategorias().subscribe(
      (data: any) => {
        this.subcategorias = data;
      },
      (error) => {
        console.error('Error al obtener las subcategorías', error);
      }
    );
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
  }
}