import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AnunciosService} from '../../services/anuncios.service';
@Component({
  selector: 'app-formulario-anuncio',
  templateUrl: './formulario-anuncio.component.html',
  styleUrls: ['./formulario-anuncio.component.css']
})
export class FormularioAnuncioComponent implements OnInit {

 formulario!: FormGroup;

  constructor(
    private anuncioService: AnunciosService,
    private formBuider: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.Formulario()
  }

  Formulario(data?)
  {
    this.formulario = this.formBuider.group({
      id: data ? data.id : '',
      proprietario: data ? data.proprietario : '',
      titulo: data ? data.titulo : '',
      logradouro: data ? data.logradouro : '',
      bairro: data ? data.bairro : '',
      tipo: [data ? data.tipo : ''],
      // ativo: null
    })
  }

  SalvarAnuncio()
  {
    this.anuncioService.save(this.formulario.value).subscribe((data)=>{
      console.log("Salvo");
    })
  }

}
