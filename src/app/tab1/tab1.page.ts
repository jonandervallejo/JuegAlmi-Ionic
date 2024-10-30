import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selectedTab: string = 'videojuegos';  // Valor inicial de la pestaña seleccionada

  videojuegos = [
    { nombre: 'The Last of Us Part II', precio: 59.99, disponibilidad: 'En stock', imagen: 'assets/img/the_last_of_us.jpg' },
    { nombre: 'God of War', precio: 49.99, disponibilidad: 'Agotado', imagen: 'assets/img/god_of_war.jpg' },
    { nombre: 'Cyberpunk 2077', precio: 39.99, disponibilidad: 'En stock', imagen: 'assets/img/cyberpunk.jpg' },
    { nombre: 'The Last of Us Part II', precio: 59.99, disponibilidad: 'En stock', imagen: 'assets/img/the_last_of_us.jpg' },
    { nombre: 'God of War', precio: 49.99, disponibilidad: 'Agotado', imagen: 'assets/img/god_of_war.jpg' },
    { nombre: 'Cyberpunk 2077', precio: 39.99, disponibilidad: 'En stock', imagen: 'assets/img/cyberpunk.jpg' },
    { nombre: 'The Last of Us Part II', precio: 59.99, disponibilidad: 'En stock', imagen: 'assets/img/the_last_of_us.jpg' },
    { nombre: 'God of War', precio: 49.99, disponibilidad: 'Agotado', imagen: 'assets/img/god_of_war.jpg' },
    { nombre: 'Cyberpunk 2077', precio: 39.99, disponibilidad: 'En stock', imagen: 'assets/img/cyberpunk.jpg' },
    { nombre: 'The Last of Us Part II', precio: 59.99, disponibilidad: 'En stock', imagen: 'assets/img/the_last_of_us.jpg' },
    { nombre: 'God of War', precio: 49.99, disponibilidad: 'Agotado', imagen: 'assets/img/god_of_war.jpg' },
    { nombre: 'Cyberpunk 2077', precio: 39.99, disponibilidad: 'En stock', imagen: 'assets/img/cyberpunk.jpg' },
  ];

  consolas = [
    { nombre: 'PlayStation 5', precio: 499.99, disponibilidad: 'En stock', imagen: 'assets/img/ps5.jpg' },
    { nombre: 'Xbox Series X', precio: 499.99, disponibilidad: 'Agotado', imagen: 'assets/img/xbox.jpg' },
    { nombre: 'Nintendo Switch', precio: 299.99, disponibilidad: 'En stock', imagen: 'assets/img/switch.jpg' },
    { nombre: 'Xbox Series X', precio: 499.99, disponibilidad: 'Agotado', imagen: 'assets/img/xbox.jpg' },
    { nombre: 'Nintendo Switch', precio: 299.99, disponibilidad: 'En stock', imagen: 'assets/img/switch.jpg' }
  ];

  smartphones = [
    { nombre: 'iPhone 14', precio: 999.99, disponibilidad: 'En stock', imagen: 'assets/img/iphone.jpg' },
    { nombre: 'Samsung Galaxy S21', precio: 799.99, disponibilidad: 'Agotado', imagen: 'assets/img/samsung.jpg' },
    { nombre: 'Google Pixel 6', precio: 599.99, disponibilidad: 'En stock', imagen: 'assets/img/pixel.jpg' },
    { nombre: 'Samsung Galaxy S21', precio: 799.99, disponibilidad: 'Agotado', imagen: 'assets/img/samsung.jpg' },
    { nombre: 'Google Pixel 6', precio: 599.99, disponibilidad: 'En stock', imagen: 'assets/img/pixel.jpg' }
  ];

  constructor(private navCtrl: NavController) {}

  irADetalles(producto: any) {
    this.navCtrl.navigateForward(['/detalles-producto', { producto: JSON.stringify(producto) }]);
  }

}
