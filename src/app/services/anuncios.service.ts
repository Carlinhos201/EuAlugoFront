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
    const formData: FormData = new FormData();

    formData.append('data', JSON.stringify(data));

    for (let i = 0; i< data.imagem.length; i++)  {
      formData.append('imagem', data.imagem[i].imagem.file, data.imagem[i].name)
    }
 
    return this.http.post<any>('http://localhost:8000/api/anuncio', formData, {headers});
  }
  getAnuncios(): Observable<any[]>{

    return this.http.get<any[]>(`http://localhost:8000/api/anuncios`);
  }
}
