import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Subscription} from 'rxjs';
import {Joke} from '../../models/joke';

@Component({
  selector: 'app-specific-joke',
  templateUrl: './specific-joke.component.html',
  styleUrls: ['./specific-joke.component.scss']
})
export class SpecificJokeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  joke: Joke;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.apiService.getSpecificJoke(id).subscribe(joke => {
      this.joke = joke;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
