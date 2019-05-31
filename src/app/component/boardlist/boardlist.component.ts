import { Component, OnInit } from '@angular/core';
import {BackendDataService} from '../../service/backend-data.service';
import {Board} from '../../model/board';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.scss']
})
export class BoardlistComponent implements OnInit {

  private Boards: Board[];

  constructor(
    private backendService: BackendDataService,
    private snackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    this.Boards = [new Board('a', 'kek'), new Board('b', 'lel'), new Board('c', 'ebat')]; 
    /*this.backendService.getBoards().subscribe(
      (data) => {
        this.Boards = data;
      },
    (err) => {
        console.log(err);
        this.snackBar.open('Something went wrong', 'Close', { duration: 3000 });
      }
    );*/
  }

}
