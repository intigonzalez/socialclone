import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'friend-thumbnail',
  templateUrl: 'friend.component.html',
  styleUrls: [ 'friend.component.css' ]
})
export class FriendThumbnail {
    @Input()
    user: string;

    ngOnInit(): void {
      
    }
}