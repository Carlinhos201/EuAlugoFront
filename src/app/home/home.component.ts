import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(
    private cidadesService: CidadesService,
    private formBuider: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.Formulario();
  }
  Formulario(data?) {
    this.form = this.formBuider.group({
      uf: data ? data.uf : '',
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
}
