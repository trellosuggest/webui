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
import { CardlistComponent } from './component/cardlist/cardlist.component';
import { MemberlistComponent } from './component/memberlist/memberlist.component';
import { MemberviewComponent } from './component/memberview/memberview.component';
import { AuthorizeComponent } from './component/authorize/authorize.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './component/index/index.component';
import { TokenComponent } from './component/token/token.component';
<<<<<<< HEAD
import { HttpClientModule} from '@angular/common/http';
import { ComponentlistComponent } from './component/componentlist/componentlist.component';
=======
>>>>>>> 840ad039c950531ce0c4f6eb489bc83e7bf95e15

@NgModule({
  declarations: [
    AppComponent,
    BoardlistComponent,
    ListlistComponent,
    CardlistComponent,
    MemberlistComponent,
    MemberviewComponent,
    AuthorizeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    TokenComponent,
    ComponentlistComponent
  ],
  imports: [
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ CookieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
