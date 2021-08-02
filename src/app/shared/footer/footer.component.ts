import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  iconBanco1 = 'assets/images/dummy/logoB.jpg';
  iconBanco2 = 'assets/images/dummy/LogoC.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

