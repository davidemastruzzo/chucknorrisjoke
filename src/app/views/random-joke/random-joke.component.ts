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
  subscription: Subscription;
  currentJoke: Joke = null;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.subscription = this.apiService.getRandomJoke().subscribe(joke => {
      this.currentJoke = joke;
    });
  }

  newRandomJoke() {
    this.subscription.unsubscribe();
    this.subscription = this.apiService.getRandomJoke().subscribe(joke => {
      this.currentJoke = joke;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
