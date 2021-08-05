import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [
    {path: 'assets/images/dummy/im1.jpg'},
    {path: 'assets/images/dummy/im2.jpg'},
    {path: 'assets/images/dummy/im3.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}