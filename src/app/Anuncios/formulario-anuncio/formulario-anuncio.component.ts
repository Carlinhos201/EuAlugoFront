import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {AnunciosService} from '../../services/anuncios.service';
@Component({
  selector: 'app-formulario-anuncio',
  templateUrl: './formulario-anuncio.component.html',
  styleUrls: ['./formulario-anuncio.component.css']
})
export class FormularioAnuncioComponent implements OnInit {

 formulario!: FormGroup;
 usuario: any = JSON.parse(this.authService.getUserLoggedIn());
  constructor(
    private anuncioService: AnunciosService,
    private formBuider: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.Formulario()
  }

  Formulario(data?)
  {
    this.formulario = this.formBuider.group({
      id: data ? data.id : '',
      user_id: data ? data.user_id : this.usuario.user.id,
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
    this.anuncioService.save(this.formulario.value, this.usuario).subscribe((data)=>{
      console.log("Salvo");
    })
  }

}
