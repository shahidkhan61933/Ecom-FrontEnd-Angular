import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  public isSubmitted:boolean = false;
  public username :string ="";
  constructor() { }
  

  ngOnInit(): void {
  }
  public onSubmit() {
    console.log("Submit event trigger");
    this.isSubmitted = true;
  }
  onInput($event:any) {
    this.username = $event.target.value;
    // console.log($event.target.value);    
    // console.log("On Input");   
  }
}
