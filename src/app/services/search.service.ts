import {Injectable} from '@angular/core';
import {Joke} from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  jokes: Joke[] = [];

  constructor() {
  }
}
