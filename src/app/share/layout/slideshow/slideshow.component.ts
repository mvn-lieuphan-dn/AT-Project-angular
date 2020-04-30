import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  banner = [
    {
      img: '../../../../assets/banner/banner1.jpg'
    },
    {
      img: '../../../../assets/banner/banner2.jpg'
    },
    {
      img: '../../../../assets/banner/banner3.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['back', 'prev'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}
