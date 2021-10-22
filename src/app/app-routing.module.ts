import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioAnuncioComponent } from './Anuncios/formulario-anuncio/formulario-anuncio.component';
import { ListaAnuncioComponent } from './Anuncios/lista-anuncio/lista-anuncio.component';
import { FormularioPessoaComponent } from './cadastrop/formulario-pessoa/formulario-pessoa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
   

    // children: [
    //   {path: 'criar-anuncio', component: FormularioAnuncioComponent},
    // ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'criar-anuncio', component: FormularioAnuncioComponent},
  {path: 'cadastro', component: FormularioPessoaComponent},
  {path: 'anuncios', component: ListaAnuncioComponent},
  { path: 'minhaconta', component:MinhaContaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
