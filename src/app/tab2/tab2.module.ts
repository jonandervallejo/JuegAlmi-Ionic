import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HeaderModule } from "../header/header.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    GoogleMapsModule,
    HeaderModule
],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
