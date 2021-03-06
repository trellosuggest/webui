import { Component, OnInit } from '@angular/core';
import {BackendDataService} from '../../service/backend-data.service';
import {Board} from '../../model/board';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

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
    private router: Router
  ) {
    this.Boards = [];
      // MOCKS
      // tslint:disable-next-line:max-line-length
    //   new Board('a', 'kek', 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x100/5afcd242d52da7ad4827966d8c896c00/photo-1495571758719-6ec1e876d6ae.jpg'),
    //   new Board('b', 'lel', 'https://ipsumimage.appspot.com/140x100'),
    //   new Board('c', 'ebat', 'https://ipsumimage.appspot.com/140x100,ff7700')
    // ];
  }

  ngOnInit() {
    this.backendService.getBoards()
      .subscribe(
        (boards) => {
          this.Boards = boards;
        },
        () => {
          this.backendService.getBoards()
            .subscribe(
              (boards) => {
                this.Boards = boards;
              },
              (err1) => {
                this.snackBar.open('При получении досок возникла ошибка', 'Закрыть', {duration: 3000});
                console.log(err1);
              });
        });
    }

  redirect(boardId: string) {
    this.router.navigate([ 'boards/' + boardId + '/lists' ]);
  }
}
