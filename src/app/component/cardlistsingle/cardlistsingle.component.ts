import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../model/card';

@Component({
  selector: 'app-cardlistsingle',
  templateUrl: './cardlistsingle.component.html',
  styleUrls: ['./cardlistsingle.component.scss']
})
export class CardlistsingleComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
