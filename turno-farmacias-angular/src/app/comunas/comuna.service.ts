import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comuna } from './comuna';

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain;charset=utf-8'
  })
};

//const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});


@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  private urlEndPoint : string = 'http://localhost:8080/api/comunas';

  constructor(private http: HttpClient) {}

  public getComunas(reg_id: string): Observable<any> {
      return this.http.post<any>(`${this.urlEndPoint}/${reg_id}`, {responseType: 'text'});
  }
}
