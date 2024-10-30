import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor() { }

  // Array para almacenar los productos en el carrito
  carrito = [
    { nombre: 'The Last of Us Part II', precio: 59.99, cantidad: 1, imagen: 'assets/img/the_last_of_us.jpg' },
    { nombre: 'PlayStation 5', precio: 499.99, cantidad: 1, imagen: 'assets/img/ps5.jpg' },
    { nombre: 'iPhone 14', precio: 999.99, cantidad: 1, imagen: 'assets/img/iphone.jpg' }
  ];

  // Método para calcular el precio total
  calcularPrecioTotal() {
    return this.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  // Método para finalizar la compra (a implementar)
  finalizarCompra() {
    console.log('Finalizando compra...');
    // Aquí puedes agregar la lógica para finalizar la compra
  }

  ngOnInit() {
  }

}
