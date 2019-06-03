import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { BoardlistComponent } from './component/boardlist/boardlist.component';
import { ListlistComponent } from './component/listlist/listlist.component';
import { MemberviewComponent } from './component/memberview/memberview.component';
import { AuthorizeComponent } from './component/authorize/authorize.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './component/index/index.component';
import { TokenComponent } from './component/token/token.component';
import { ComponentlistComponent } from './component/componentlist/componentlist.component';
import { BoardlistsingleComponent } from './component/boardlistsingle/boardlistsingle.component';
import { ListlistsingleComponent } from './component/listlistsingle/listlistsingle.component';
import { CardlistsingleComponent } from './component/cardlistsingle/cardlistsingle.component';
import { MemberDialogComponent } from './component/member-dialog/member-dialog.component';
import { MembersDialogComponent } from './component/members-dialog/members-dialog.component';
import {FormsModule} from '@angular/forms';
import { RearrangeResultDialogComponent } from './component/rearrange-result-dialog/rearrange-result-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardlistComponent,
    ListlistComponent,
    MemberviewComponent,
    AuthorizeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    TokenComponent,
    ComponentlistComponent,
    BoardlistsingleComponent,
    ListlistsingleComponent,
    CardlistsingleComponent,
    MemberDialogComponent,
    MembersDialogComponent,
    RearrangeResultDialogComponent
  ],
  imports: [
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CookieService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    MemberDialogComponent,
    MembersDialogComponent
  ]
})
export class AppModule { }
