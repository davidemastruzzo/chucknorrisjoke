import {Component, OnInit} from '@angular/core';
import {Joke} from '../../models/joke';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss']
})
export class RandomJokeComponent implements OnInit {
  currentJoke: Joke;

  constructor() {
  }

  ngOnInit() {
  }

  newRandomJoke() {
  }
}
