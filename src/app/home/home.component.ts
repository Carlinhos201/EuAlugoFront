import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  arrayAnuncios: any[] = []
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
    // console.log("FORMULARIO", this.formulario.value);
  }
  async buscarCidadesPorUf(uf) {
    // this.loadingCidade = true
    let a: any = [];
   await  this.cidadesService
      .getCidadesUf(uf)
      .subscribe((res) => {
       console.log(res)
        this.arrayCidades = res;
        // this.loadingCidade = false
      });
  }
   buscarAnuncios() {
    // this.loadingCidade = true
    let a: any = [];
     this.anunciosService.getAnuncios().subscribe((res) => {
       console.log(res)
        this.arrayAnuncios = res;
        // this.loadingCidade = false
      });
  }
}
