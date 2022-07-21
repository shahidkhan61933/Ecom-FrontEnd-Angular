import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
import { BannerViewComponent } from './banner-view/banner-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public user:User={
id:1001,
name : 'haris siddique',
email:'naziHaris@gamil.com',
status :true,
adress:'Khattri Road '

}
public userList :User[];
public data :any ;
@ViewChild(BannerViewComponent)
public child:any;

public bannerTitle :string ="";


  constructor(private dataService:DataService) {
    this.userList = dataService.userList;
   }

   ngAfterViewInit():void{
     console.log(this.child);   
    console.log(this.bannerTitle);
  setTimeout(()=>this.data =this.bannerTitle=this.child.banner,0)
   }

  ngOnInit(): void {
  }
  recievewData($event:any){
    this.data=$event;
    console.log(this.data);

  }

}
