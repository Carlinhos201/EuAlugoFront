import { Component, OnInit } from '@angular/core';
import { AnunciosService } from 'src/app/services/anuncios.service';
@Component({
  selector: 'app-lista-anuncio',
  templateUrl: './lista-anuncio.component.html',
  styleUrls: ['./lista-anuncio.component.css']
})
export class ListaAnuncioComponent implements OnInit {

  arrayAnuncios: Array<any> = [];
  constructor(
    private anunciosService: AnunciosService
  ) { }

  ngOnInit(): void {
    this.buscarAnuncios();
  }

  buscarAnuncios() {
    let a: any = [];
     this.anunciosService.getAnuncios().subscribe((res) => {
       console.log(res)
        this.arrayAnuncios = res;
      });
  }
}
