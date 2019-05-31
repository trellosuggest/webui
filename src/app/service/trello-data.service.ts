import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorizationService} from './authorization.service';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Route} from '@angular/router';
import {BackendDataService} from './backend-data.service';

@Injectable({
  providedIn: 'root'
})
export class TrelloDataService {

  constructor(
    private http: HttpClient,
    private authService: AuthorizationService,
    private backendService: BackendDataService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  setCurrentUser() {
    const token = localStorage.getItem('token');
    this.http.get('https://api.trello.com/1/members/me/?key=' + this.authService.apiKey + '&token=' + token)
      .subscribe((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      },
        (error) => {
          console.log(error);
          this.snackBar.open('Something went wrong', 'Close', {duration: 3000});
        }
    );
  }
}
