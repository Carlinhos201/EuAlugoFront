import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-meus-anuncio',
  templateUrl: './meus-anuncio.component.html',
  styleUrls: ['./meus-anuncio.component.css']
})
export class MeusAnuncioComponent implements OnInit {

  data: Array<any> = []
  qtd_anuncios: string = ""
  usuario: any = []

  constructor(
    private anunciosService: AnunciosService,
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.PegaUsuarioLogado()
    this.buscaAnunciosId()
  }
  PegaUsuarioLogado() {
    this.usuario = JSON.parse(this.authService.getUserLoggedIn());
  }
     buscaAnunciosId() {
    this.anunciosService
      .getAnunciosByUser()
      .subscribe((data) => {
        this.qtd_anuncios = data.length == 0 ? "Vazio" : "Possui Dados"
        console.log(data)
        this.data = data
      })
  }
}
