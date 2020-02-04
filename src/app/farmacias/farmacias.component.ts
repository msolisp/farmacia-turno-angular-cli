import { Component, OnInit } from '@angular/core';
import { Farmacia } from './farmacia';
import { FarmaciaService } from './farmacia.service';


@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html'
})
export class FarmaciasComponent implements OnInit {

  farmacias: Farmacia[];

  constructor(private farmaciaService: FarmaciaService) { }

  ngOnInit() {
    this.farmaciaService.getFarmacias().subscribe(
      farmacias => this.farmacias = farmacias
    );
  }

}
