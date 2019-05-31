import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Board} from '../model/board';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  private baseUrl: string = 'http://localhost:5000';

  headers: HttpHeaders = new HttpHeaders({
    token: localStorage.getItem('token')
  });

  constructor(
    private http: HttpClient
  ) { }

  // sendToken(token: string) {
  //   this.http.post('http://localhost:5000/token', '{ "token": ' + token + '}');
  // }
  postToken(token: string) {
    this.http.post(this.baseUrl + '/test',  { token }, {
      headers: this.headers
    });
  }

  getBoards(): Observable<any> {
    return this.http.get(this.baseUrl + '/boards');
  }
}
