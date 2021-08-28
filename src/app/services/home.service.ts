import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  dataObservable: Observable<any>;
  observer: any;
  constructor(private http: HttpClient) { 
    this.dataObservable = new Observable((observer) => {
      this.observer = observer;
  })
  }
}
