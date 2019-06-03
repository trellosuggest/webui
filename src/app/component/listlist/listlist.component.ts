import { Component, OnInit } from '@angular/core';
import {List} from '../../model/list';
import {BackendDataService} from '../../service/backend-data.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {User} from '../../model/user';

@Component({
  selector: 'app-listlist',
  templateUrl: './listlist.component.html',
  styleUrls: ['./listlist.component.scss']
})
export class ListlistComponent implements OnInit {

  Lists: List[];

  Members: User[];

  constructor(
    private backendService: BackendDataService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    // MOCKS
    this.Lists = [];
    this.Members = [];
    //   // tslint:disable-next-line:max-line-length
    //   new List('listId1', 'listName1', 'a'),
    //   new List('listId2', 'listName2', 'a'),
    //   new List('listId3', 'listName3', 'a')
    // ];
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (data) => {
          this.backendService.getLists(data.get('board_id'))
            .subscribe(
              (lists) => {
                this.Lists = lists;
              },
              (err) => {
                this.snackBar.open('Ошибка при получении списков', 'Закрыть', {duration: 3000});
                console.log(err);
              }
            );
          this.backendService.getMembers(data.get('board_id'))
            .subscribe(
              (users) => {
                this.Members = users;
              },
              (err) => {
                this.snackBar.open('Ошибка при получении участников', 'Закрыть', {duration: 3000});
                console.log(err);
              }
            );
        }
      );
  }

  getInitials(user: User) {
    return user.fullName.split(' ')[0][0] + user.fullName.split(' ')[1][0];
  }
}
