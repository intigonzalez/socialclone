import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'user-image',
  templateUrl: 'user.image.component.html',
  styleUrls: [ 'user.image.component.css' ]
})
export class UserImageComponent {
    @Input()
    user: string;

    ngOnInit(): void {
      
    }
}