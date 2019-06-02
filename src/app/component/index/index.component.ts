import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../service/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.user) {
      this.router.navigate(['/boards']);
    }
  }

  authorize() {
    this.authService.login();
  }
}
