import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
products=[
  {
    name:'焦糖馬卡龍',
    price:'450',
    img:"../../../assets/2.jpg"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
