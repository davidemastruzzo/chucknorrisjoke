import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

  public getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.url + '/jokes/categories', {headers: this.defaultHeader});
  }

  public getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.url + '/jokes/random');
  }

  public getAllJokes(): Observable<Joke[]> {
    let params = new HttpParams();
    params = params.append('query', 'chuck');
    return this.http.get<Joke[]>(this.url + '/jokes/search', {headers: this.defaultHeader, params});
  }
}
