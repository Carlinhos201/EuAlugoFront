import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchAll, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  autenticacao(user: any): Observable<any> {
    return this.http.post(`http://localhost:8000/api/auth/login`, { email: user.email.trim(), password: user.password.trim() })
      .pipe(map((token: any) => {
          this.setTokenLoggedIn(token)
          this.router.navigate(['']);
        return token;
      }));
  }
  logout() {
    return this.http.get(`http://localhost:8000/api/auth/logout`, { headers: this.userToken() }).subscribe(res => {
      localStorage.removeItem("_token");
      this.isLoggedIn = false;
      this.router.navigate(['']);
    }, error => {
      localStorage.removeItem("_token");
      this.isLoggedIn = false;
      this.router.navigate(['']);
    })
  }
  getUserLoggedIn() {
    return localStorage.getItem("_token");
  }
  user() {
    return this.http.get<any>(`http://localhost:8000/api/auth/user`, { headers: this.userToken() })
      .pipe(
        tap(user => {
          return user;
        })
      )
  }
  userToken() {
    let token = JSON.parse(this.getUserLoggedIn());
    const headers = new HttpHeaders({
      'Authorization': token["token_type"] + " " + token['access_token']
    });
    return headers;
  }
  setTokenLoggedIn(token: any) {
    localStorage.setItem('_token', `${JSON.stringify(token)}`)
  }
  register(data): Observable<any> {
    return this.http.post<any>(`http://localhost:8000/api/register`, data);
}
update(data, token): Observable<any> {
  return this.http.post<any>(`http://localhost:8000/api/auth/update`, data, { headers: this.userToken() });
}
}
