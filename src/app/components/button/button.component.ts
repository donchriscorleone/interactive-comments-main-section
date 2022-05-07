import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() type: 'normal' | 'icon' = 'normal';
  @Input() color!: 'primary' | 'warning' | 'accent';
  @Input() iconName!: 'delete' | 'edit' | 'reply' | 'plus' | 'minus';
  @Input() size!: 'sm' | 'lg';
  @Input() enableHoverFx: boolean = false;
  @Input() textTransform: 'uppercase' | 'lowercase' | 'capitalize' = 'lowercase';
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  handleClick(event: any) {
    this.onClick.emit(event);
  }
}
