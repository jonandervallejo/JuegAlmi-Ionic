import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() pageTitle: string = '';

  constructor(private router: Router) {}

  navigateToCart() {
    this.router.navigate(['/tabs/cart']); // Cambia '/cart' por la ruta a la que deseas navegar
  }
}
