import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioAnuncioComponent } from './Anuncios/formulario-anuncio/formulario-anuncio.component';
import { ListaAnuncioComponent } from './Anuncios/lista-anuncio/lista-anuncio.component';
import { ProdutoSingularComponent } from './Anuncios/produto-singular/produto-singular.component';
import { SingleAnuncioComponent } from './Anuncios/single-anuncio/single-anuncio.component';
import { FormularioPessoaComponent } from './cadastrop/formulario-pessoa/formulario-pessoa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import {AuthGuardService} from './guards/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
   

    // children: [
    //   {path: 'criar-anuncio', component: FormularioAnuncioComponent},
    // ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'criar-anuncio', component: FormularioAnuncioComponent, canActivate:[AuthGuardService]},
  {path: 'cadastro', component: FormularioPessoaComponent},
  {path: 'anuncios', component: ListaAnuncioComponent},
  { path: 'minhaconta', component:MinhaContaComponent, canActivate:[AuthGuardService]},
  {path: 'anuncio_singular/:id', component: ProdutoSingularComponent},
  {path: 'single-anuncio', component: SingleAnuncioComponent},
  // { path: 'home', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
