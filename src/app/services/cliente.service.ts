import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

const baseUrlCliente =  '/rest/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  
  constructor(private http:HttpClient) { }

  listaCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(baseUrlCliente+"/listaCliente");
  }

  

  
}
