import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../model/list';
import {Card} from '../../model/card';

@Component({
  selector: 'app-listlistsingle',
  templateUrl: './listlistsingle.component.html',
  styleUrls: ['./listlistsingle.component.scss']
})
export class ListlistsingleComponent implements OnInit {

  @Input() list: List;

  private cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
