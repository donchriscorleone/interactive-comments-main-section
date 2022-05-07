import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() init!: string;
  @Output() onChange = new EventEmitter<string>();

  value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
