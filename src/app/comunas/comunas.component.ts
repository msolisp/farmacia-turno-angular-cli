import { Component, OnInit} from '@angular/core';
import { Comuna } from './comuna';
import { ComunaService } from './comuna.service';

@Component({
  selector: 'app-comunas',
  templateUrl: './comunas.component.html'

})
export class ComunasComponent implements OnInit {

  comunas: Comuna[];

  constructor(private comunaService: ComunaService) {}

  ngOnInit() {
    this.comunaService.getComunas().subscribe(
      comunas => this.comunas = comunas
    );
  }
  
}
