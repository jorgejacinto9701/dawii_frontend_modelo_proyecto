import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca.model';

const baseUrlMarca = 'http://localhost:8090/url/lista';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  constructor(private http: HttpClient) {}

  listaMarca(): Observable<Marca[]> {
    return this.http.get<Marca[]>(baseUrlMarca + '/listaMarca');
  }

}
