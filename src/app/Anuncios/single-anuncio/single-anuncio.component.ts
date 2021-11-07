import { Component, OnInit } from '@angular/core';
import { AnunciosService } from 'src/app/services/anuncios.service';

@Component({
  selector: 'app-single-anuncio',
  templateUrl: './single-anuncio.component.html',
  styleUrls: ['./single-anuncio.component.css']
})
export class SingleAnuncioComponent implements OnInit {
arrayAnuncios: Array<any> = []
  constructor(
    private anunciosService: AnunciosService
  ) { }

  ngOnInit(): void {
    this.buscarAnuncios()
  }
    buscarAnuncios()
    {
      this.anunciosService.getAnuncios().subscribe(data =>{
        this.arrayAnuncios = data;
      })
    }
}


