import { Component, OnInit } from '@angular/core';
import { RickAppService } from '../service/rick-app.service';
import { Result } from '../interface/rick-app.interface';

interface SearchCharacter {
  txtCharacter: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  public characters: Result[] = []
  public searchCharacters: SearchCharacter = {
    txtCharacter: ''
  }

  constructor(private rickAppService: RickAppService){}

  ngOnInit() {
    this.updateCharacters();
  }

  onInputChange() {
    this.updateCharacters();
  }

  async updateCharacters() {
    const { txtCharacter } = this.searchCharacters;
    this.characters = await this.rickAppService.getResult(txtCharacter);
  }

}
