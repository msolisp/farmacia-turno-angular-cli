import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comuna } from './comuna';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  private urlEndPoint : string = 'http://localhost:8080/api/comunas';

  constructor(private http: HttpClient) {}

  getComunas(): Observable<Comuna[]> {
      return this.http.get<Comuna[]>(this.urlEndPoint);
  }

}
