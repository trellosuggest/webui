import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../model/user';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

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

  public apiKey = 'dfe27ae204fc44ddaac9cd606a4527fa';

  private authConfig: string[];
  private readonly fullAuthUrl: string;


  public setToken(token: string) {
    this.cookieService.set('token', token);
  }

  public getToken() {
    return this.cookieService.get('token');
  }

  public clearToken() {
    this.cookieService.deleteAll('token');
  }

  public get user(): User {
    return this.currentUserSubject.value;
  }

  public set user(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  public deleteUser() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public login() {
    window.location.href = this.fullAuthUrl;
  }

  logout() {
    this.deleteUser();
    this.clearToken();
    this.router.navigate(['/']);
  }
}
