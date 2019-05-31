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
      localStorage.setItem('token', (token.split('=')[1]));
      this.backendService.postToken(localStorage.getItem('token'));
      this.trelloService.setCurrentUser();
      this.router.navigate(['/boards']);
    });
  }

}
