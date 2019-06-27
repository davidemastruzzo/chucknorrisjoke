import {Component, OnDestroy, OnInit} from '@angular/core';
import {Joke} from '../../models/joke';
import {Subscription} from 'rxjs';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss']
})
export class RandomJokeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  currentJoke: Joke = null;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.apiService.getRandomJoke().subscribe(joke => {
      this.currentJoke = joke;
    }));
  }

  newRandomJoke() {
    this.subscriptions.push(this.apiService.getRandomJoke().subscribe(joke => {
      this.currentJoke = joke;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
