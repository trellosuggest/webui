import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { TokenComponent } from './component/token/token.component';
import {BoardlistComponent} from './component/boardlist/boardlist.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'token',
    component: TokenComponent
  },
  {
    path: 'boards',
    component: BoardlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
