
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './rick-app/pages/main-page/main-page.component';
import { CharacterPageComponent } from './rick-app/pages/character-page/character-page.component';

const routes: Routes = [

  {
    path: 'home',
    component: MainPageComponent
  },

  {
    path: 'character/:id',
    component: CharacterPageComponent
  },

  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
