import { Component, Input, OnInit } from '@angular/core';
import { Comment, DataService, IUser } from 'src/app/services/data.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() comment!: Comment;
  @Input() isCurrentlyReplying: boolean = false;
  @Input() currentUser!: IUser;

  isUser: boolean = false

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if (this.comment) {
      this.isUser = this.comment.user.username === this.currentUser.username
    }
  }

  handleScoreChange(score: any) {
    this.dataService.vote(this.comment, score);
  }

  handleDelete() {
    this.dataService.delete(this.comment);
  }

  handleAdd(obj: any) {
    this.dataService.reply(this.comment, obj);
    this.isCurrentlyReplying = false;
  }
}
