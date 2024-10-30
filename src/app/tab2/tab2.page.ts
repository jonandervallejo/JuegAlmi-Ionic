import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  latitude: number = 43.27181585245227; // Latitud
  longitude: number = -2.9487204479883298; // Longitud
  zoom: number = 16; // Nivel de zoom

  constructor() {}


  ngOnInit() {

  }

  
}
