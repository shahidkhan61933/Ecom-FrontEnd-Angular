import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public user :User;
  public userList:User[];

  constructor(private dataService:DataService) {
    this.user = dataService.user;
    this.userList=dataService.userList;

   }

  ngOnInit(): void {
  }
  public getUserId():number{
    return this.dataService.UserId;
    
  }

}
