import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class AppMaterialModule { }
