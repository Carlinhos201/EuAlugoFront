import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { AnunciosService } from '../services/anuncios.service';
import {CidadesService} from '../services/cidades.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estados: Array<string> = this.cidadesService.estados
  form?: FormGroup;
  cidades: any = [];
  arrayCidades: any[] = [];
  arrayAnuncios: Array<any> = [];
  constructor(
    private cidadesService: CidadesService,
    private formBuider: FormBuilder,
    private anunciosService: AnunciosService
  ) { }

  ngOnInit(): void {
    this.Formulario();
    this.buscarAnuncios();
  }
  Formulario(data?) {
    this.form = this.formBuider.group({
      uf: data ? data.uf : 'Selecione um Estado',
    });
  }
  async buscarCidadesPorUf(uf) {
    let a: any = [];
   await  this.cidadesService
      .getCidadesUf(uf)
      .subscribe((res) => {
       console.log(res)
        this.arrayCidades = res;
      });
  }
  
   buscarAnuncios() {
    let a: any = [];
     this.anunciosService.getAnuncios().subscribe((res) => {
       console.log(res)
        this.arrayAnuncios = res;
      });
  }
}
