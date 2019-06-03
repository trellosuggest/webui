import { NgModule } from '@angular/core';
import {MatToolbarModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class AppMaterialModule { }
