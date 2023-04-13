import { Component } from '@angular/core';
import { RickAppService } from '../service/rick-app.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  constructor(private rickAppService: RickAppService){}

  get characters(){
    return this.rickAppService.character;
  }

}
