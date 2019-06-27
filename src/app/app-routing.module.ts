import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RandomJokeComponent} from './views/random-joke/random-joke.component';

const routes: Routes = [
  {path: 'random', component: RandomJokeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
