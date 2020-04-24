import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  images: string[] = [
    'assets/images/slide1.png',
    'assets/images/slide2.png',
    'assets/images/slide3.png',
    'assets/images/slide4.png'
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
