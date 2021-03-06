import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../model/list';
import {Card} from '../../model/card';
import {BackendDataService} from '../../service/backend-data.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {User} from '../../model/user';
import {forEach} from '@angular/router/src/utils/collection';
import {RepositoryService} from '../../service/repository.service';
import {MembersDialogComponent} from '../members-dialog/members-dialog.component';
import {RearrangeResultDialogComponent} from '../rearrange-result-dialog/rearrange-result-dialog.component';

@Component({
  selector: 'app-listlistsingle',
  templateUrl: './listlistsingle.component.html',
  styleUrls: ['./listlistsingle.component.scss']
})
export class ListlistsingleComponent implements OnInit {

  @Input() list: List;

  private cards: Card[];

  constructor(
    public dialog: MatDialog,
    private backendService: BackendDataService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private repositoryService: RepositoryService
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

  rearrangeList(listId: string) {
    let res: {
      fullName: string,
      cards: {
        name: string,
        story: number
      }[];
    }[] = [];
    let i = 0;
    this.repositoryService.Members.forEach((member) => {
      res.push(
        {
          fullName: member.fullName,
          cards: []
        });
      member.cards.forEach((card) => {
        if(card.idList === this.list.id) {
          res[i].cards.push({name: card.name, story: card.story});
        }
      });
      i++;
    });
    this.backendService.rearrange(JSON.stringify(res))
      .subscribe(
        (data) => {
          const dialogRef = this.dialog.open(RearrangeResultDialogComponent, {
            width: '50%',
            data: data
          });
        }
      );
  }
}
