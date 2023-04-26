import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http'
import { CharactersComponent } from './components/characters/characters.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    PaginationComponent,
    SearchComponent,
    CharacterPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ]
})
export class RickAppModule { }
