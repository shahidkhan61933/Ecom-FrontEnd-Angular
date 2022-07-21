import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-recent-view',
  templateUrl: './recent-view.component.html',
  styleUrls: ['./recent-view.component.css']
})
export class RecentViewComponent implements OnInit {

  public  user:User={
    id:10009,
    name:'marrySmith',
    email:'marry@gmail.com',
    status:true,
    adress:'Marry Street'


  }
  @Output()
  public userEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }
  public submitUser(){
    this.userEvent.emit(this.user);
    
  }

}
