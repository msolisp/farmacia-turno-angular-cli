import { Component, OnInit } from '@angular/core';
import { Comuna } from 'src/app/comunas/comuna';
import { ComunaService } from 'src/app/comunas/comuna.service';
import { FarmaciaService } from 'src/app/farmacias/farmacia.service';
import { Farmacia } from 'src/app/farmacias/farmacia';

@Component({
  selector: 'app-directiva-search',
  templateUrl: './directiva-search.component.html',
  styleUrls: ['./directiva-search.component.css']
})
export class DirectivaSearchComponent implements OnInit {

  comunas: Comuna[];
  farmacias: Farmacia[];

  constructor(private comunaService: ComunaService,
              private farmaciaService: FarmaciaService
             ) { }

  ngOnInit() {
    //obtiene comunas
    this.comunaService.getComunas().subscribe(
      comunas => this.comunas = comunas );

    //obtiene farmacias
    this.farmaciaService.getFarmacias().subscribe(
        farmacias => this.farmacias = farmacias
    );
  }

}
