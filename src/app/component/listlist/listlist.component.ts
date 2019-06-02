import { Component, OnInit } from '@angular/core';
import {List} from '../../model/list';

@Component({
  selector: 'app-listlist',
  templateUrl: './listlist.component.html',
  styleUrls: ['./listlist.component.scss']
})
export class ListlistComponent implements OnInit {

  Lists: List[];

  constructor() {
    // MOCKS
    this.Lists = [
      // tslint:disable-next-line:max-line-length
      new List('listId1', 'listName1', 'a'),
      new List('listId2', 'listName2', 'a'),
      new List('listId3', 'listName3', 'a')
    ];
  }

  ngOnInit() {
  }

}
