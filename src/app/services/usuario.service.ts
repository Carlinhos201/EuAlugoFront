import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  minhaConta(): Observable<any> {
    return this.http.get<any>(`http://localhost:8000/api/usuario/minhaConta`, { headers: this.authService.userToken() });
  }
  find(id: any): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8000/api/usuario/usuario/${id}`, { headers: this.authService.userToken() });
  }
}
