import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RandomJokeComponent} from './views/random-joke/random-joke.component';
import {JokeCategoryComponent} from './views/joke-category/joke-category.component';

const routes: Routes = [
  {path: 'random', component: RandomJokeComponent},
  {path: 'categories', component: JokeCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
