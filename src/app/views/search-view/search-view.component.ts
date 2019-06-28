import {Component, OnDestroy, OnInit} from '@angular/core';
import {Joke} from '../../models/joke';
import {SearchService} from '../../services/search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit, OnDestroy {
  jokes: Joke[] = [];
  subscription: Subscription;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.subscription = this.searchService.jokes.subscribe(jokes => {
      this.jokes = jokes;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
