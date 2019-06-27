import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-joke-category',
  templateUrl: './joke-category.component.html',
  styleUrls: ['./joke-category.component.scss']
})
export class JokeCategoryComponent implements OnInit {

  categories: Array<string>;
  selectedCategories: Set<string>;

  constructor(private apiService: ApiService) {
    this.selectedCategories = new Set<string>();
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

}
