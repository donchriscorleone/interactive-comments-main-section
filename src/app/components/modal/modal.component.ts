import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isOpen: boolean = false;

  @Output() modalEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
