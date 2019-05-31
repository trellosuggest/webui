import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { TokenComponent } from './component/token/token.component';
import {BoardlistComponent} from './component/boardlist/boardlist.component';
import { ListlistComponent } from './component/listlist/listlist.component';
import { CardlistComponent } from './component/cardlist/cardlist.component';
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
        path: ':id', 
        redirectTo: ':id/lists', 
        pathMatch: 'full',
        children: 
        [
          { 
            path: 'lists', 
            component: ListlistComponent, 
            children: 
            [
              {
                path: ':id', 
                redirectTo: ':id/cards', 
                pathMatch: 'full',
                children:
                [
                  {
                    path: 'cards',
                    component: CardlistComponent
                  },
                  {
                    path: 'members',
                    component: MemberlistComponent
                  }
                ]
              }
            ]
          },
          { 
            path: 'members', 
            component: MemberlistComponent 
          }
        ]
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
