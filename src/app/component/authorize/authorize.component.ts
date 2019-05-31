import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../service/authorization.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {



  constructor(
    private authService: AuthorizationService
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.authService.authorize();
  }
}
