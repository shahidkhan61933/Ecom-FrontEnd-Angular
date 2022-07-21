import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbind',
  templateUrl: './classbind.component.html',
  styleUrls: ['./classbind.component.css']
})
export class ClassbindComponent implements OnInit {

  //data properties

  public title: string = "Style binding "
  public username: string = "shahid khan";
  public age: number;
  public email: string;
  public isMaried: boolean = true;
  public companies: String[] = ["Facebook", "Amazon", "Netflix", "Google"];

  public BG = {
    ON: 'bg-one',
    TW: 'bg-two',
    TH: 'bg-three',


  }
  public user = {
    iemaild: 1000,
    name: "Tony ",
    email: "Tony@Gmail.com",
    status: true

  }

  constructor() {
    this.age = 20;
    this.email = "shahid@gmail.com";
  }

  ngOnInit(): void {
  }
  public onChange() {
    this.user.status = !this.user.status;

  }
}
