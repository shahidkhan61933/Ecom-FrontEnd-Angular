import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  public message:string = "Today";
  public text:string="";
  constructor() { }

  ngOnInit(): void {
  }
  onInput($event:any) {
    this.message = $event.target.value;
  }
}
