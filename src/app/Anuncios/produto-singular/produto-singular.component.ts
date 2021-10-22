import { Component, OnInit } from '@angular/core';
import { AnunciosService } from 'src/app/services/anuncios.service';

@Component({
  selector: 'app-produto-singular',
  templateUrl: './produto-singular.component.html',
  styleUrls: ['./produto-singular.component.css']
})
export class ProdutoSingularComponent implements OnInit {

  constructor(
    private anuncioService: AnunciosService
  ) { }

  ngOnInit(): void {
  }

}
