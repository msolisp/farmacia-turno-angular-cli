import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-farmacias',
  templateUrl: './directiva-farmacias.component.html'
})
export class DirectivaFarmaciasComponent {

  listaFarmacia: string[] = ['Farmacia 1', 'Farmacia 2', 'Farmacia 3', 'Farmacia 4'];

  constructor() { }


}
