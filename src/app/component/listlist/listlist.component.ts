import { Component, OnInit } from '@angular/core';
import {List} from '../../model/list';
import {BackendDataService} from '../../service/backend-data.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {User} from '../../model/user';
import {forEach} from '@angular/router/src/utils/collection';
import {RepositoryService} from '../../service/repository.service';
import {MemberDialogComponent} from '../member-dialog/member-dialog.component';
import {MembersDialogComponent} from '../members-dialog/members-dialog.component';

@Component({
  selector: 'app-listlist',
  templateUrl: './listlist.component.html',
  styleUrls: ['./listlist.component.scss']
})
export class ListlistComponent implements OnInit {


  constructor(
    public dialog: MatDialog,
    private backendService: BackendDataService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private repositoryService: RepositoryService
  ) {
    // MOCKS
    this.repositoryService.Lists = [];
    this.repositoryService.Members = [];
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
                this.repositoryService.Lists = lists;
              },
              (err) => {
                this.snackBar.open('Ошибка при получении списков', 'Закрыть', {duration: 3000});
                console.log(err);
              }
            );
          this.backendService.getMembers(data.get('board_id'))
            .subscribe(
              (users) => {
                users.forEach(user => {
                  user.cards = [];
                });
                this.repositoryService.Members = users;
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

  showMemberInfo(user: User) {
    const dialogRef = this.dialog.open(MemberDialogComponent, {
      width: '40%',
      height: '35%',
      data: user
    });
  }

  showAllMembersInfo() {
    const dialogRef = this.dialog.open(MembersDialogComponent, {
      width: '50%'
    });
  }

  rearrangeAll() {
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
        res[i].cards.push({name: card.name, story: card.story});
      });
      i++;
    });
    this.backendService.rearrange(JSON.stringify(res))
      .subscribe(
        //TODO
      );
  }
}
