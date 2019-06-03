import { Component, OnInit } from '@angular/core';
import {List} from '../../model/list';
import {BackendDataService} from '../../service/backend-data.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-listlist',
  templateUrl: './listlist.component.html',
  styleUrls: ['./listlist.component.scss']
})
export class ListlistComponent implements OnInit {

  Lists: List[];

  constructor(
    private backendService: BackendDataService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    // MOCKS
    this.Lists = [];
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
        }
      );
  }

  rearrangeAll() {
    // TODO Rearrange All method (non-ignored lists)
  }
}
