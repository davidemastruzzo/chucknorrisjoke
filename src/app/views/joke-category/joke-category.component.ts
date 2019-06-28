import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Joke} from '../../models/joke';

@Component({
  selector: 'app-joke-category',
  templateUrl: './joke-category.component.html',
  styleUrls: ['./joke-category.component.scss']
})
export class JokeCategoryComponent implements OnInit {

  categories: string[];
  selectedCategories: Set<string> = new Set<string>();
  jokes: Joke[] = [];
  filteredJokes: Joke[] = [];

  constructor(private apiService: ApiService) {
    this.selectedCategories.add('dev');
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe(categories => {
      categories.unshift('Other');
      this.categories = categories;
    });
    this.apiService.getAllJokes().subscribe(jokes => {
      this.jokes = jokes.result;
      this.categoryChange();
    });
  }

  categoryChange() {
    this.filteredJokes = this.jokes.filter((joke) => {
      return Array.from(this.selectedCategories).some(selectedCategory => {
        return selectedCategory === 'Other' ? joke.categories.length === 0 : joke.categories.includes(selectedCategory);
      });
    });
  }
}
