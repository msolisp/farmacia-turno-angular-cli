import { Injectable } from '@angular/core';
import { Farmacia } from './farmacia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  private urlEndPoint : string = 'http://localhost:8080/api/farmacias';

  constructor(private http: HttpClient) { }

  getFarmacias(): Observable<Farmacia[]> {
    return this.http.get<Farmacia[]>(this.urlEndPoint);
  }

}
