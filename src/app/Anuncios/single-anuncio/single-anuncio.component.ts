import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { ModalEntrarContatoComponent } from './modal-entrar-contato/modal-entrar-contato.component';

@Component({
  selector: 'app-single-anuncio',
  templateUrl: './single-anuncio.component.html',
  styleUrls: ['./single-anuncio.component.css']
})
export class SingleAnuncioComponent implements OnInit {

  data: any = []

  constructor(
    private route: ActivatedRoute,
    private anunciosService: AnunciosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
          this.anunciosService.find(params['id']).subscribe(data => {
          console.log(data)
          this.data = data
        });
      }
    });
  }
  openDialog(data) {
    const dialogRef = this.dialog.open(ModalEntrarContatoComponent, {
      width: '60%',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}


