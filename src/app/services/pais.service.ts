import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

const baseUrl = "http://localhost:8090/url/lista";

@Injectable({
  providedIn: 'root'
})
export class PaisService {
 
  constructor(private http:HttpClient) { }


  listaPais():Observable<Pais[]>{
    console.log(111111111111);
    
    return this.http.get<Pais[]>(baseUrl+"/listaPais");

  }
}

