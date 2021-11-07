import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.css']
})
export class ModalPerfilComponent implements OnInit {

  formulario!: FormGroup;
  usuario: any = []
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<ModalPerfilComponent>,
    private route: ActivatedRoute,
    private formBuider: FormBuilder,
    private authService: AuthService
  ) { this.usuario = JSON.parse(this.authService.getUserLoggedIn());}

  ngOnInit(): void {
    this.Formulario()
            // this.formulario = this.formBuider.group({
            //   name: [ this.usuario.user.name, Validators.required],
            //   email: [ this.data.email, Validators.required],
            //   password: [ this.data.password, Validators.required],
            //   celular:  this.data.celular
            // });
  }
  Formulario(){
    this.formulario = this.formBuider.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      celular: ""
    });
  }

  alterarDados(){
    // Swal.fire({
    //   title: 'Tem certeza que deseja alterar os dados?',
    //   text: "Você não poderá reverter isso!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: 'Não, cancelar',
    //   confirmButtonText: 'Sim, alterar'
    // }).then((result) => {
    //   if (result.value) {
        this.authService.update(this.formulario.value, this.usuario).subscribe(res => {
          console.log(res)
          Swal.fire(
            'Sucesso!',
            'Seus dados foram alterados.',
            'success'
          )
        })
        
  //     } else {
  //       Swal.getTimerLeft()
  //     }
  //   })
    
  }
}
