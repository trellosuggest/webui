import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-rearrange-result-dialog',
  templateUrl: './rearrange-result-dialog.component.html',
  styleUrls: ['./rearrange-result-dialog.component.scss']
})
export class RearrangeResultDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RearrangeResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      fullName: string,
      cards: {
        name: string,
        story: number
      }[]
    }[],
  ) { }

  close(): void {
    this.dialogRef.close();
  }

}
