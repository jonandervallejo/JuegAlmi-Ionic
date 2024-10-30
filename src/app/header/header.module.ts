import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule, // Importa IonicModule
  ],
  exports: [HeaderComponent] // Exporta el componente para que se pueda usar en otras partes de la aplicación
})
export class HeaderModule { }
