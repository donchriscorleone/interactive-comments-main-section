import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppData, DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  data$!: Observable<AppData>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
  }

}
