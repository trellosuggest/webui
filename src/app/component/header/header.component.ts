import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../service/authorization.service';
import {TrelloDataService} from '../../service/trello-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  redirectIndex() {
    this.router.navigate(['/']);
  }
}
