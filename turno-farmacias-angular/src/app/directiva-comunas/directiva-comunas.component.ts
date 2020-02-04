import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-comunas',
  templateUrl: './directiva-comunas.component.html'
})
export class DirectivaComunasComponent {

  listaComuna: string[] = ['Comuna 1', 'Comuna 2', 'Comuna 3'];
  
  constructor() { }

}
