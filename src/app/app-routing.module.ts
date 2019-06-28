import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RandomJokeComponent} from './views/random-joke/random-joke.component';
import {JokeCategoryComponent} from './views/joke-category/joke-category.component';
import {SpecificJokeComponent} from './views/specific-joke/specific-joke.component';

const routes: Routes = [
  {path: 'random', component: RandomJokeComponent},
  {path: 'categories', component: JokeCategoryComponent},
  {path: 'specific-joke/:id', component: SpecificJokeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
