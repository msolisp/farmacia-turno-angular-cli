import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaFarmaciasComponent } from './directiva-farmacias/directiva-farmacias.component';
import { FarmaciaService } from './farmacias/farmacia.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DirectivaSearchComponent } from './directiva-search/directiva-search.component';
import { DirectivaComunasComponent } from './directiva-comunas/directiva-comunas.component';
import { ComunasComponent } from './comunas/comunas.component';
import { ComunaService } from './comunas/comuna.service';


const routes : Routes = [
  //{path: '', redirectTo: '/farmacias', pathMatch: 'full'},
  {path: '', component: DirectivaSearchComponent},
  {path: 'directiva-listado-farmacia', component: DirectivaFarmaciasComponent},
  {path: 'farmacias', component: FarmaciasComponent},
  {path: 'comunas', component: ComunasComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    FarmaciasComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaFarmaciasComponent,
    DirectivaSearchComponent,
    DirectivaComunasComponent,
    ComunasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FarmaciaService, ComunaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
