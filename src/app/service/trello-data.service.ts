import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorizationService} from './authorization.service';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {BackendDataService} from './backend-data.service';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TrelloDataService {

  constructor(
    private http: HttpClient,
    private authService: AuthorizationService,
    private backendService: BackendDataService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async setCurrentUser() {
    const token = this.authService.getToken();
    const user = await this.http.get(
      'https://api.trello.com/1/members/me/?key=' + this.authService.apiKey + '&token=' + token).toPromise() as User;

      // .subscribe((user: User) => {
    this.authService.user = user;
    this.snackBar.open('Добро пожаловать, ' + user.fullName, 'Закрыть', {duration: 3000});
      //   },
      //   (error) => {
      //     console.log(error);
      //     this.snackBar.open('Ошибка аутентификации', 'Закрыть', {duration: 3000});
      //   }
      // );
  }

  deleteCurrentUser() {
    this.authService.clearToken();
    this.authService.deleteUser();
  }
}
