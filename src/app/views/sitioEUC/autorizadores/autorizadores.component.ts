import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-autorizadores',
  templateUrl: './autorizadores.component.html',
  styleUrls: ['./autorizadores.component.scss']
})
export class AutorizadoresComponent implements OnInit {

  active:boolean = false;
  nivelAutori = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openXl(content) {
    this.modalService.open(content, { centered: true, size: 'xl', scrollable: true });
  }

  cerrarPopup(){
    this.active = false;
  }

}
