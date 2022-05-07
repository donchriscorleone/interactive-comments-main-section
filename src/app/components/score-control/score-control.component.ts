import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score-control',
  templateUrl: './score-control.component.html',
  styleUrls: ['./score-control.component.scss']
})
export class ScoreControlComponent implements OnInit {
  @Input() score: number = 0;

  @Output() changeScore: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeScore(event: number) {
    this.changeScore.emit(event);
  }

}
