import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-view',
  templateUrl: './banner-view.component.html',
  styleUrls: ['./banner-view.component.css']
})
export class BannerViewComponent implements OnInit {
public banner:String ="This is Banner component data pass for home";

  constructor() { }

  ngOnInit(): void {
  }

}
