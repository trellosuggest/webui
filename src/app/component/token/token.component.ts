import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../service/authorization.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendDataService} from '../../service/backend-data.service';
import {TrelloDataService} from '../../service/trello-data.service';
import {__await} from 'tslib';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor(
    private authService: AuthorizationService,
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendDataService,
    private trelloService: TrelloDataService
  ) { }

  ngOnInit() {
    this.route.fragment.subscribe(async (token) => {
      this.authService.setToken(token.split('=')[1]);
      await this.trelloService.setCurrentUser();
      await this.backendService.postToken(this.authService.getToken(), this.authService.user.id);
      await this.router.navigate(['/boards']);
    });
  }

}
