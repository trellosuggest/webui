import {Component, Inject, OnInit} from '@angular/core';
import {RepositoryService} from '../../service/repository.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {User} from '../../model/user';
import {MemberDialogComponent} from '../member-dialog/member-dialog.component';

@Component({
  selector: 'app-members-dialog',
  templateUrl: './members-dialog.component.html',
  styleUrls: ['./members-dialog.component.scss']
})
export class MembersDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<MembersDialogComponent>,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  getStorysFromMember(member: User) {
    let points = 0;
    member.cards.forEach(card => {
      points += card.story;
    });
    return points;
  }

  showMemberInfo(user: User) {
    const dialogRef = this.dialog.open(MemberDialogComponent, {
      width: '250px',
      data: user
    });
  }
}
