import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnunciosService } from 'src/app/services/anuncios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-singular',
  templateUrl: './produto-singular.component.html',
  styleUrls: ['./produto-singular.component.css']
})
export class ProdutoSingularComponent implements OnInit {
  data: any[] = []
  constructor(
    private anuncioService: AnunciosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {

      if (params.hasOwnProperty('id')) {
      this.anuncioService.find(params['id']).subscribe((data) => {
          console.log(data);
          this.data = data
        });
      }
    })
  }
}
