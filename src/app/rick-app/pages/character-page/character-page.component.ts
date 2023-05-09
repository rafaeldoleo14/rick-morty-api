import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickAppService } from '../../service/rick-app.service';
import { switchMap } from 'rxjs';
import { Result } from '../../interface/rick-app.interface';


@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent  implements OnInit{

  public character?: Result;

  constructor(private activatedRoute: ActivatedRoute,
    private rickAppService: RickAppService, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.rickAppService.getSingleCharacter(id)))
    .subscribe(character => {

      if(!character) {
        this.router.navigateByUrl('home')
        return;
      };

      console.log(character)
      return this.character = character;
    })
  }

  onBack():void{
    this.router.navigateByUrl('/home');
  }

}
