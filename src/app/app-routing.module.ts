import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { TokenComponent } from './component/token/token.component';
import {BoardlistComponent} from './component/boardlist/boardlist.component';
import { ListlistComponent } from './component/listlist/listlist.component';
import { MemberlistComponent } from './component/memberlist/memberlist.component';

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
    component: BoardlistComponent,
    children:
      [
        {
          path: ':board_id',
          children:
            [
              {
                path: '',
                redirectTo: 'boards/:board_id/lists',
                pathMatch: 'full',
              }
            ]
        }
      ]
  },
  {
    path: 'boards/:board_id/lists',
    component: ListlistComponent,
    // children:
    // [
    //   {
    //     path: ':id',
    //    children:
    //     [
    //       {
    //         path: '',
    //         redirectTo: 'cards',
    //         pathMatch: 'full',
    //       },
    //       {
    //         path: 'cards',
    //         component: CardlistComponent
    //       },
    //       {
    //         path: 'members',
    //         component: MemberlistComponent
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: 'members',
    component: MemberlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
