import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  imagenes = [
    { url: 'assets/imagen1.jpg', descripcion: 'Imagen 1' },
    { url: 'assets/imagen2.jpg', descripcion: 'Imagen 2' },
    { url: 'assets/imagen3.jpg', descripcion: 'Imagen 3' },
    { url: 'assets/imagen4.jpg', descripcion: 'Imagen 4' },
    { url: 'assets/imagen5.jpg', descripcion: 'Imagen 5' },
    { url: 'assets/imagen6.jpg', descripcion: 'Imagen 6' },
    { url: 'assets/imagen7.jpg', descripcion: 'Imagen 7' },
    { url: 'assets/imagen1.jpg', descripcion: 'Imagen 1' },
    { url: 'assets/imagen2.jpg', descripcion: 'Imagen 2' },
    { url: 'assets/imagen3.jpg', descripcion: 'Imagen 3' },
    { url: 'assets/imagen4.jpg', descripcion: 'Imagen 4' },
    { url: 'assets/imagen5.jpg', descripcion: 'Imagen 5' },
    { url: 'assets/imagen6.jpg', descripcion: 'Imagen 6' },
    { url: 'assets/imagen7.jpg', descripcion: 'Imagen 7' },
    { url: 'assets/imagen1.jpg', descripcion: 'Imagen 1' }
    // Agrega más imágenes según sea necesario
  ];

  modalAbierto = false;
  imagenSeleccionada: { url: string, descripcion: string } | null = null;

  constructor() {}

  abrirImagen(imagen: { url: string, descripcion: string }) {
    this.imagenSeleccionada = imagen;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.imagenSeleccionada = null;
  }
}
