import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Board} from '../model/board';
import {Observable} from 'rxjs';
import {List} from '../model/list';
import {Card} from '../model/card';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  private baseUrl = 'http://localhost:5000';


  constructor(
    private http: HttpClient
  ) {
  }

  // sendToken(token: string) {
  //   this.http.post('http://localhost:5000/token', '{ "token": ' + token + '}');
  // }
  async postToken(token: string, userId: string) {
    this.http.post(this.baseUrl + '/token',  JSON.stringify({ token: token, user_id: userId }), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).subscribe();
  }

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.baseUrl + '/boards');
  }

  getLists(boardId: string): Observable<List[]> {
    return this.http.get<List[]>(this.baseUrl + '/boards/' + boardId + '/lists');
  }

  getCards(listId: string) {
    return this.http.get<Card[]>(this.baseUrl + '/lists/' + listId + '/cards');
  }

  getStoryPoints(cardId: string) {
    return this.http.get<any>(this.baseUrl + '/cards/' + cardId + '/storyPoints');
  }

  getMembers(boardId: string) {
    return this.http.get<User[]>(this.baseUrl + '/boards/' + boardId + '/members');
  }

  rearrange(body: string) {
    return this.http.post(this.baseUrl + '/rearrange', body);
  }
}
