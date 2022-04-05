import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/models/marca.model';
import { Pais } from 'src/app/models/pais.model';
import { MarcaService } from 'src/app/services/marca.service';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-consulta-marca',
  templateUrl: './consulta-marca.component.html',
  styleUrls: ['./consulta-marca.component.css']
})
export class ConsultaMarcaComponent implements OnInit {

  paises : Pais[]=[];
  selPais:number=0;
  nombre:string="";
  certificado:string=""

  listaMarca:Marca[]=[];

  marca:Marca={
    pais:{
      idPais:0
    }
  };

  constructor(
    private _paisService: PaisService,
    private _marcaService: MarcaService
  ) {

    console.log("ssssssss");
    
    this._paisService.listaPais().subscribe(
      (x) => this.paises = x

    );
   console.log("1");
    console.log(this.paises);
    console.log("2");
  }

  ngOnInit(): void {
  }

  consultaMarca() {
    console.log("3");
    console.log("Se realizo la consulta");
    console.log(this.paises);

    this._marcaService.listaMarca().subscribe(
      (lista) => this.listaMarca=lista
    );
  }

}