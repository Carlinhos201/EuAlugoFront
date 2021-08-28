import { HttpClient } from '@angular/common/http';
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
        // console.log(token);
        // if (token.users || true) {
          this.setTokenLoggedIn(token)
          this.router.navigate(['']);
        // }
        // else {
         
        // }
        return token;
      }));
  }
  setTokenLoggedIn(token: any) {
    localStorage.setItem('_token', `${JSON.stringify(token)}`)
  }
}
