import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  nuevoUsuario: Usuario = {
    nombre: '',
    apellido: '',
    dni: '',
    mail: '',
    telefono: ''
  };

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
  }

  guardarUsuario() {
    // Aquí implementaremos la lógica para guardar el nuevo usuario localmente
  }
}