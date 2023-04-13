import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { CharactersComponent } from './characters/characters.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PaginationComponent,
    SearchComponent,
    CharactersComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RickAppModule { }
