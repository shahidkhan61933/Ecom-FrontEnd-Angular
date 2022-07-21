import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public user : User={
  id:10001,
  name :'john Smith',
  email:'john@gmail.com',
  status:true,
  adress:'jk Road'
}
public userList:User[]=[
  {id:1001,
    name :'john Carter',
    email:'carter@gmail.com',
    status:true,
    adress:'jk Rasta'
  },{
    id:1009,
    name:'mike tison ',
    email:'tyson@gmail.com',
    status:true,
    adress:'jk maarg'
  }
];
public isLogged:boolean=false;
public token:String='kjajagdljgaiusgsjkhsh(*#jhsdghj';



  constructor() { }
  public getUser():User{
    return this.user;
  }
  public get UserId():number{
    return this.user.id;

  }
  public isLoggedIn():boolean{
    return this.isLogged;

  }
  public get UserList():User[]{
    return this.userList;
    
  }
}
