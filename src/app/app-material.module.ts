import { NgModule } from '@angular/core';
import {MatToolbarModule, MatCardModule, MatDialogModule, MatInputModule} from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class AppMaterialModule { }
