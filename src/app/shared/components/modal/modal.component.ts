import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() active: boolean;
  @Input() size: string = 'm';
  abrir:boolean = true;
  cerrar:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
