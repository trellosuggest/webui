import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
