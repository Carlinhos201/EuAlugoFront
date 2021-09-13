import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-pessoa',
  templateUrl: './formulario-pessoa.component.html',
  styleUrls: ['./formulario-pessoa.component.css']
})
export class FormularioPessoaComponent implements OnInit {
  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder
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
}
