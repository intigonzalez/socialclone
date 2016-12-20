import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes.component'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    template:`
    <nav class="main-nav">
        <div id="searchbox">
            <input value="pepe">
        </div>
    </nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    <user-image class="user-image"></user-image>
    <friend-thumbnail></friend-thumbnail>
    `,
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
}