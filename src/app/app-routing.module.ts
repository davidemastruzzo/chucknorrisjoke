import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextfieldComponent} from './components/textfield/textfield.component';

const routes: Routes = [
  {path: 'test', component: TextfieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
