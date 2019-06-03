import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.scss']
})
export class MemberDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public member: User
  ) {}

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
}
