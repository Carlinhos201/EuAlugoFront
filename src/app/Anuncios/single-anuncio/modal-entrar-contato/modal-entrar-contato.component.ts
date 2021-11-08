import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-entrar-contato',
  templateUrl: './modal-entrar-contato.component.html',
  styleUrls: ['./modal-entrar-contato.component.css']
})
export class ModalEntrarContatoComponent implements OnInit {

  constructor(
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<ModalEntrarContatoComponent>,
     ) { }

  ngOnInit(): void {
  }
  
}
