import { NgModule } from '@angular/core';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { MatToolbarModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class AppMaterialModule { }
