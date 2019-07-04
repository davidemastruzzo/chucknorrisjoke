import {Component} from '@angular/core';
import {Joke} from '../../models/joke';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent {
  jokes: Joke[] = [];

  constructor(public searchService: SearchService) {
  }

}
