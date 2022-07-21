import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.css']
})
export class TopViewComponent implements OnInit {
@Input()public user:any;
@Input('userList')
public list:any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.user);
    // console.log(this.list);
  }

}
