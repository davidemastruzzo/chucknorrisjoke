import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Joke} from '../models/joke';
import {Observable} from 'rxjs';
import {SearchResponse} from '../models/searchResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://api.chucknorris.io';


  private defaultHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.url + '/jokes/categories', {headers: this.defaultHeader});
  }

  public getSpecificJoke(id: string): Observable<Joke> {
    return this.http.get<Joke>(this.url + '/jokes/' + id);
  }

  public getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.url + '/jokes/random');
  }

  public getAllJokes(): Observable<SearchResponse> {
    let params = new HttpParams();
    params = params.append('query', 'chuck');
    return this.http.get<SearchResponse>(this.url + '/jokes/search', {headers: this.defaultHeader, params});
  }

  public searchJokes(query: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.url + '/jokes/search?query=' + query);
  }
}
