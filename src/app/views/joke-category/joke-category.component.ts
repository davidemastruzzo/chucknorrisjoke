import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Joke} from '../../models/joke';

@Component({
  selector: 'app-joke-category',
  templateUrl: './joke-category.component.html',
  styleUrls: ['./joke-category.component.scss']
})
export class JokeCategoryComponent implements OnInit {

  categories: Array<string>;
  selectedCategories: Set<string>;
  jokes: Joke[];

  constructor(private apiService: ApiService) {
    this.selectedCategories = new Set<string>();
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.apiService.getAllJokes().subscribe(jokes => {
      this.jokes = jokes;
    });
  }

  categoryChange() {
  }
}
