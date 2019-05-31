import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../service/authorization.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private authService: AuthorizationService
  ) { }

  ngOnInit() {
  }

  authorize() {
    this.authService.authorize();
  }
}
