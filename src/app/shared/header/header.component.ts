import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  iconBanco = 'assets/images/dummy/CITIBANAMEX-01.svg';
  iconHome = 'assets/images/dummy/home.svg'
  classMenu = 'dropdown';

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    if(this.classMenu !== 'dropdown')
      this.classMenu = 'dropdown';
  }

  hideMenu(){
    this.classMenu = 'dropdown close-menu';
  }
  
  showSubSubMenu( isShow:any ): void {
    debugger
    let subSubMenu: HTMLElement = (document.querySelector('.sub-submenu-right') as HTMLElement)
    subSubMenu.style.display = isShow ? 'block' : 'none';
  }

  showSubSubMenuA( isShow:any ): void {
    debugger
    let subSubMenu: HTMLElement = (document.querySelector('.sub-submenu-left') as HTMLElement)
    subSubMenu.style.display = isShow ? 'block' : 'none';
  }

}
