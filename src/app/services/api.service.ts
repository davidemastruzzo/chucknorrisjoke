import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Joke} from '../models/joke';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.chucknorris.io';


  private defaultHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
  }

  getSpecificJoke(id: string): Observable<Joke> {
    return this.http.get<Joke>(this.url + '/jokes/' + id);
  }
  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.url + '/jokes/random');
  }
}
