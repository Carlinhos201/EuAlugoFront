import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import {UsuarioService} from '../services/usuario.service'
import { ModalPerfilComponent } from './modal-perfil/modal-perfil.component';


@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {
  usuario: any = [];
  token: any = []
  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pegarUsuario()
  }
  pegarUsuario() {
    this.token = JSON.parse(this.authService.getUserLoggedIn())
    this.usuarioService.minhaConta().subscribe(res => {
      this.usuario = res;
      console.log(res);

    })
  }
  openDialog(perfil) {
    const dialogRef = this.dialog.open(ModalPerfilComponent, {
      width: '60%',
      data: perfil
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
