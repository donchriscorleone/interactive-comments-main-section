import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-comments-main-section';
  isOpen$: Observable<boolean>

  constructor(private dataService: DataService) {
    this.isOpen$ = this.dataService.isModalOpen;
  }

  handleModal(event: any) {
    if (event) this.dataService.delete();

    else this.dataService.handleModal(event);
  }
}
