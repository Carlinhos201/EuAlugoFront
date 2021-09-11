import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private http: HttpClient) { }

  save(data): Observable<any> {
    return this.http.post('http://localhost:8000/api/anuncio', data);
  }
  getAnuncios(): Observable<any[]>{

    return this.http.get<any[]>(`http://localhost:8000/api/anuncios`);
  }
}
