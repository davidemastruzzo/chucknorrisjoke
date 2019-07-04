import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Subscription} from 'rxjs';
import {SearchService} from '../../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchString: string;
  searchResponseSubscription: Subscription;

  constructor(private apiService: ApiService, private searchService: SearchService, private router: Router) {
  }

  ngOnInit() {
  }

  search() {
    if (this.searchResponseSubscription) {
      this.searchResponseSubscription.unsubscribe();
    }
    this.searchResponseSubscription = this.apiService.searchJokes(this.searchString).subscribe(searchResponse => {
      this.searchService.jokes = searchResponse.result;
      this.router.navigate(['/search']);
    });
  }

  ngOnDestroy(): void {
    this.searchResponseSubscription.unsubscribe();
  }
}
