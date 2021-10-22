import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message?: string;
  formulario!: FormGroup
  inscricao: Subscription;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      lembrar: false
    });
  }
  login() {
    // this.loading = true;
    this.inscricao = this.authService.autenticacao(this.formulario.value)
      .subscribe(data => {
        // this.loading = false;
      },
        error => {
          Swal.fire('Erro', 'Email ou Senha incorretos!', 'error')
          this.formulario.reset();
          this.message = error ? error.error.message : "E-mail e/ou Senha incorretos.";
        });
  }
}
