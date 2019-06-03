import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../model/list';
import {Card} from '../../model/card';
import {BackendDataService} from '../../service/backend-data.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {User} from '../../model/user';

@Component({
  selector: 'app-listlistsingle',
  templateUrl: './listlistsingle.component.html',
  styleUrls: ['./listlistsingle.component.scss']
})
export class ListlistsingleComponent implements OnInit {

  @Input() list: List;

  private cards: Card[];

  constructor(
    private backendService: BackendDataService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.cards = [];
  }

  ngOnInit() {
    this.backendService.getCards(this.list.id)
      .subscribe(
        (cards) => {
          this.cards = cards;
        },
        (err) => {
          this.snackBar.open('Ошибка при получении карточек списка', 'Закрыть', {duration: 3000});
          console.log(err);
        }
      );
  }

}
