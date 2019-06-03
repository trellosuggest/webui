import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../model/card';
import {BackendDataService} from '../../service/backend-data.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-cardlistsingle',
  templateUrl: './cardlistsingle.component.html',
  styleUrls: ['./cardlistsingle.component.scss']
})
export class CardlistsingleComponent implements OnInit {

  @Input() card: Card;

  constructor(
    private backendService: BackendDataService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.backendService.getStoryPoints(this.card.id)
      .subscribe(
        (points) => {
          this.card.story = points.length ? (JSON.parse(points[0].value).points ? JSON.parse(points[0].value).points : 0) : 0;
        },
        (err) => {
          this.snackBar.open('Не удалось получить стори поинты', 'Закрыть', {duration: 3000});
          console.log(err);
        }
      );
  }

}
