import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../service/authorization.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendDataService} from '../../service/backend-data.service';
import {TrelloDataService} from '../../service/trello-data.service';

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
    this.route.fragment.subscribe((token) => {
      this.authService.setToken(token.split('=')[1]);
      this.backendService.postToken(this.authService.getToken());
      this.trelloService.setCurrentUser();
    });
  }

}
