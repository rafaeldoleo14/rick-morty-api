import { Component, OnInit } from '@angular/core';
import { RickAppService } from '../../service/rick-app.service';
import { Result, RickAPIData } from '../../interface/rick-app.interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  public characters: Result[] = [];
  public txtCharacter: string = ''

  constructor(private rickAppService: RickAppService){}

  ngOnInit() {
    this.onInputChange();
  }

  onInputChange() {

    this.rickAppService.getResult()
    .subscribe((resp: RickAPIData)=>{
      this.characters = resp.results.filter(character => character.name.trim().toLowerCase().includes(this.txtCharacter.trim().toLowerCase()));
      this.rickAppService.setCharacter(this.characters);
    })

  }


}
