import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eualugoweb';
  token: any = []
  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void{
    this.pegarUsuario()
  }

  pegarUsuario(){
    this.token = JSON.parse(this.authService.getUserLoggedIn())
  }
  logout() {
    this.authService.logout();
  }
}

