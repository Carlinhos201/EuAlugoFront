import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnunciosService } from 'src/app/services/anuncios.service';

@Component({
  selector: 'app-meus-anuncio',
  templateUrl: './meus-anuncio.component.html',
  styleUrls: ['./meus-anuncio.component.css']
})
export class MeusAnuncioComponent implements OnInit {

  data: Array<any> = []

  constructor(
    private anunciosService: AnunciosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.buscaAnunciosId()
  }
     buscaAnunciosId() {
    this.anunciosService
      .getAnunciosByUser()
      .subscribe((data) => {
        console.log(data)
        this.data = data
      })
  }
}
