import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
  }
}
