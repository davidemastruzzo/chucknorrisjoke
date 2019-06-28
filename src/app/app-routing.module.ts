import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RandomJokeComponent} from './views/random-joke/random-joke.component';
import {JokeCategoryComponent} from './views/joke-category/joke-category.component';
import {SpecificJokeComponent} from './views/specific-joke/specific-joke.component';
import {SearchViewComponent} from './views/search-view/search-view.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'random', component: RandomJokeComponent},
  {path: 'categories', component: JokeCategoryComponent},
  {path: 'joke/:id', component: SpecificJokeComponent},
  {path: 'search', component: SearchViewComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

