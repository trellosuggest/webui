import {Component, Input, OnInit} from '@angular/core';
import {Board} from '../../model/board';

@Component({
  selector: 'app-boardlistsingle',
  templateUrl: './boardlistsingle.component.html',
  styleUrls: ['./boardlistsingle.component.scss']
})
export class BoardlistsingleComponent implements OnInit {

  @Input() board: Board;

  constructor() { }

  ngOnInit() {
  }

}
