import { Injectable } from '@angular/core';
import { BehaviorSubject, of, ReplaySubject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators'

import * as data from './../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private RAW = JSON.parse(JSON.stringify(data));
  private behaviorSubject = new BehaviorSubject<AppData>(this.RAW);
  data$ = this.behaviorSubject.asObservable();


  constructor() { 
    this.behaviorSubject.next({currentUser: this.RAW.currentUser, comments: this.RAW.comments.map((c: IComment) => new Comment(c))})
  }

  getData() {
    return this.data$.pipe(
      shareReplay()
    );
  }

  vote(comment: Comment, score: number) {
    of(this.RAW).pipe(
        map((data: AppData) => {
          data.comments = data.comments.map(c => {
            if (c.id === comment.id) {
              c.score = score;
            } else if (c.replies.length > 0) {
              c.replies = c.replies.map(r => {
                if (r.id === comment.id) r.score = score;
                return r;
              })
            }
            return c;
          })
          return data;
        }),
        tap((data) => this.handleBehaviorSubject(data))
    ).subscribe();
  }

  delete(comment: Comment) {
    of(this.RAW).pipe(
      map((data: AppData) => {
        data.comments = data.comments.filter(c => {
          if (c.replies.length > 0) c.replies = c.replies.filter(r => (r.id !== comment.id))
          return (c.id !== comment.id);
        })
        return data;
      }),
      tap((data) => this.handleBehaviorSubject(data))
    ).subscribe();
  }

  reply(comment: Comment, obj: any) {
    let objComment = {
      ...obj,
      replies: [],
      replyingTo: comment.user.username,
      id: this.getLatestId() + 1
    }
    
    let newComment = new Comment(objComment);
    of(this.RAW).pipe(
      map((data: AppData) => {
        let replyingComment = data.comments.find(c => {
          if (c.id === comment.id) return c;

          else if (c.replies.length > 0) {
            return c.replies.find(x => x.id === comment.id);
          }

          return null;
        })

        replyingComment?.replies.push(newComment);
        return data;
      }),
      tap((data) => this.handleBehaviorSubject(data))
    ).subscribe()
  }

  private handleBehaviorSubject(data: AppData) {
    this.RAW = data;
    this.behaviorSubject.next(data);
  }

  private getLatestId() {
    let latestId = 0;
    
    let arr: number[] = [];
    this.behaviorSubject.value.comments.forEach(c => {
      arr.push(c.id)
      if (c.replies.length > 0) arr = [...arr, ...c.replies.map(x => x.id)];
    })

    arr.forEach(x => {
      if (x > latestId) latestId = x;
    })
    
    return latestId;
  }
}

export interface IComment {
  id: number
  content: string
  createdAt: string
  score: number
  user: IUser
  replies: Array<Comment>
}

export class Comment implements IComment {
  id!: number;
  content!: string;
  createdAt!: string;
  score!: number;
  user!: IUser;
  replyingTo?: string;
  replies!: Comment[];

  constructor(init: IComment) {
    Object.assign(this, init);
    if (init.replies) this.replies = init.replies.map(r => new Comment(r));
  }

}

export interface IUser {
  image: {
    png: string,
    webp: string,
  }
  username: string
}

export interface AppData {
  currentUser: IUser
  comments: Comment[]
}