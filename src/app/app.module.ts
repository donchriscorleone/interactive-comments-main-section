import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ButtonComponent } from './components/button/button.component';
import { ScoreControlComponent } from './components/score-control/score-control.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ReplyCardComponent } from './components/reply-card/reply-card.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    ButtonComponent,
    ScoreControlComponent,
    CommentCardComponent,
    CommentListComponent,
    ReplyCardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
