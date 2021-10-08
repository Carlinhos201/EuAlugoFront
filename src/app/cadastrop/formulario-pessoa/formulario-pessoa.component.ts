import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-formulario-pessoa',
  templateUrl: './formulario-pessoa.component.html',
  styleUrls: ['./formulario-pessoa.component.css']
})
export class FormularioPessoaComponent implements OnInit {
  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.Formulario()
  }

  Formulario(data?){
    this.formulario = this.formBuilder.group({
      name: [data ? data.name : '', Validators.required],
      email: [data ? data.email : '', Validators.required],
      password: [data ? data.password : '', Validators.required],
      telefone: data ? data.telefone : ''
    });
  }

  register()
  {
    // this.formulario.patchValue({
    //   name: this.user.pessoa.cpfcnpj,
    //   pessoa_id: this.user.pessoa.id
    // })
      this.authService.register(this.formulario.value).subscribe(res => {
      // Swal.fire("Salvo", "Salvo com sucesso", "success")
    }, error => {
      // Swal.fire("Ops, deu erro!", "Não foi possível salvar", "error")
    })
  }
}
