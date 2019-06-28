import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TextfieldComponent} from './components/textfield/textfield.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RandomJokeComponent} from './views/random-joke/random-joke.component';
import {ApiService} from './services/api.service';
import {JokeCategoryComponent} from './views/joke-category/joke-category.component';
import {SelectComponent} from './components/select/select.component';
import {IconComponent} from './components/icon/icon.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {IconButtonComponent} from './components/icon-button/icon-button.component';
import {ChipComponent} from './components/chip/chip.component';
import {SpecificJokeComponent} from './views/specific-joke/specific-joke.component';
import {ChucknorrisLogoComponent} from './components/chucknorris-logo/chucknorris-logo.component';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    RandomJokeComponent,
    JokeCategoryComponent,
    SelectComponent,
    IconComponent,
    CheckboxComponent,
    IconButtonComponent,
    ChipComponent,
    SpecificJokeComponent,
    ChucknorrisLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
