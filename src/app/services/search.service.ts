import {Injectable} from '@angular/core';
import {Joke} from '../models/joke';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  jokes: Subject<Joke[]> = new Subject();

  constructor() {
  }
}
