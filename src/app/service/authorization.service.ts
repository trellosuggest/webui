import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public apiKey = 'dfe27ae204fc44ddaac9cd606a4527fa';

  private authConfig: string[];
  private readonly fullAuthUrl: string;

  constructor(
    private router: Router
  ) {
    this.authConfig = [
      'callback_method=fragment',
      'return_url=http://localhost:4200/token',
      'scope=read,write',
      'expiration=1day',
      'name=TrelloSuggest',
      'key=' + this.apiKey,
      'response_type=token'
    ];
    this.fullAuthUrl = 'http://trello.com/1/authorize/?' + this.authConfig.join('&');
  }

  public authorize() {
    window.location.href = this.fullAuthUrl;
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
