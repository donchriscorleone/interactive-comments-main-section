import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/services/data.service';

@Component({
  selector: 'app-reply-card',
  templateUrl: './reply-card.component.html',
  styleUrls: ['./reply-card.component.scss']
})
export class ReplyCardComponent implements OnInit {
  @Input() replyingTo: string = "";
  @Input() currentUser!: IUser;
  @Output() reply = new EventEmitter<any>();

  content!: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleReply() {
    const replyObj = {
      content: this.content,
      createdAt: 'Now',
      replyingTo: this.replyingTo,
      user: this.currentUser,
      score: 0,
    }
    this.reply.emit(replyObj);
  }
}
