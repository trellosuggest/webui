import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../model/card';
import {BackendDataService} from '../../service/backend-data.service';
import {MatSnackBar} from '@angular/material';
import {User} from '../../model/user';
import {RepositoryService} from '../../service/repository.service';

@Component({
  selector: 'app-cardlistsingle',
  templateUrl: './cardlistsingle.component.html',
  styleUrls: ['./cardlistsingle.component.scss']
})
export class CardlistsingleComponent implements OnInit {

  @Input() card: Card;

  constructor(
    private backendService: BackendDataService,
    private snackBar: MatSnackBar,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
    this.backendService.getStoryPoints(this.card.id)
      .subscribe(
        (points) => {
          this.card.story = points.length ? (JSON.parse(points[0].value).points ? JSON.parse(points[0].value).points : 1) : 1;
          this.repositoryService.Members.forEach((member) => {
            if (!!this.repositoryService.Lists.find( (x) => this.card.id_list === x.id)           // TODO IsIgnored
                  && !!this.card.id_members.find((x) => x === member.id)) {
              member.cards.push(this.card);
            }
          });
        },
        () => {
          this.backendService.getStoryPoints(this.card.id)
            .subscribe(
              (points) => {
                this.card.story = points.length ? (JSON.parse(points[0].value).points ? JSON.parse(points[0].value).points : 1) : 1;
              },
              (err1) => {
                this.snackBar.open('Не удалось получить стори поинты', 'Закрыть', {duration: 3000});
                console.log(err1);
              });
        }
      );
  }

}
