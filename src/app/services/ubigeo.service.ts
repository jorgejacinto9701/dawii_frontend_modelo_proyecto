import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubigeo } from '../models/ubigeo.model';

const baseUrlUbigeo = 'http://localhost:8090/url/lista';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor(private http:HttpClient) { }


  listarDepartamento(): Observable<string[]>{
    return this.http.get<string[]>(baseUrlUbigeo+"/listaDepartamentos");
  }

  listaProvincias(paramDep:any): Observable<string[]>{
    return this.http.get<string[]>(baseUrlUbigeo+"/listaProvincias/"+paramDep);
  }

  listaDistritos(paramDep:any,paramProv:any): Observable<Ubigeo[]>{
    return this.http.get<Ubigeo[]>(baseUrlUbigeo+"/listaDistritos/"+paramDep+"/"+paramProv);
  }


}
