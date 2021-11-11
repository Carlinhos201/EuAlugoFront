import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  save(data: any, token): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': token["token_type"] + " " + token.access_token
    });
 
    return this.http.post<any>('http://localhost:8000/api/anuncio', data, {headers});
  }
  getAnuncios(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8000/api/anuncios`);
  }
  getAnunciosByUser(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8000/api/anunciosbyuser`, {headers: this.authService.userToken()});
  }
  find(id): Observable<any>{
    return this.http.get(`http://localhost:8000/api/anuncio/${id}`);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${`http://localhost:8000/api/anuncio`}/${id}`, data, { headers: this.authService.userToken() });
  }
  deleteImagem(id: any): Observable<any> {
    return this.http.delete<any>(`${`http://localhost:8000/api/deletaimg`}/${id}`);
  }
}
