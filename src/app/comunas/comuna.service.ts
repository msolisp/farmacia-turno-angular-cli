import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  private urlEndPoint : string = 'http://localhost:8080/api/comunas';

  constructor(private http: HttpClient) {}

  getComunas(): Observable<any> {
      return this.http.get<any>(this.urlEndPoint);
  }

}
