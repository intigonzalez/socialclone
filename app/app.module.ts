import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';


import { HeroService } from './hero.service'

import { HeroesComponent }  from './heroes.component';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-details.component';
import { DashboardComponent } from './dashboard.component'
import { HeroSearchComponent } from './search/hero-search.component'
import { UserImageComponent } from './user-image-component/user.image.component'
import { FriendThumbnail } from './friends/friend.component'

import { AppRoutingModule } from './app-routing.module'


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extensions';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [HeroService],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,

    UserImageComponent,
    FriendThumbnail
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 

}