import { Component, OnInit } from '@angular/core';
import { RickAppService } from '../../service/rick-app.service';
import { Result, RickAPIData } from '../../interface/rick-app.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent  implements OnInit{

  public characters: Result[] = [];

  constructor(private rickAppService: RickAppService){}

  ngOnInit(): void {
    this.rickAppService.getCharactersSubject().subscribe((characters: Result[]) => {
      this.characters = characters;
    });
  }


}
