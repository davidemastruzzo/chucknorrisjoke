import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JokeCategoryComponent} from './views/joke-category/joke-category.component';

const routes: Routes = [
  {path: 'categories', component: JokeCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
