import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.page.html',
  styleUrls: ['./detalles-producto.page.scss'],
})
export class DetallesProductoPage implements OnInit {

  producto: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el producto pasado como parámetro
    this.route.params.subscribe(params => {
      this.producto = JSON.parse(params['producto']);
    });
  }

  agregarAlCarrito() {
    console.log('Producto añadido al carrito:', this.producto);
    // Aquí puedes agregar la lógica para añadir el producto al carrito
  }



}
