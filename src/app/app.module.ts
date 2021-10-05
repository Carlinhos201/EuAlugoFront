import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CidadesService } from './services/cidades.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './login/login.component';
import { FormularioAnuncioComponent } from './Anuncios/formulario-anuncio/formulario-anuncio.component';
import { ListaAnuncioComponent } from './Anuncios/lista-anuncio/lista-anuncio.component';
import { FormularioPessoaComponent } from './cadastrop/formulario-pessoa/formulario-pessoa.component';
import  { NgxMaskModule }  from  'ngx-mask';
import {MatIconModule} from '@angular/material/icon'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FormularioAnuncioComponent,
    ListaAnuncioComponent,
    FormularioPessoaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    SweetAlert2Module.forRoot()
    // MatIconModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
