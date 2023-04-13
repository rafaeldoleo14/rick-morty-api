import { Component } from '@angular/core';
import { RickAppService } from '../service/rick-app.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  public pagination: number = 1;

  constructor(private rickAppService:RickAppService){}

  counter(value: number):void{

    this.pagination += value;
    this.rickAppService.pagination = this.pagination.toString();
    this.rickAppService.getResult('');

  }

}
