import { Injectable } from '@angular/core';
import { Result, RickAPIData } from '../interface/rick-app.interface';

@Injectable({
  providedIn: 'root'
})
export class RickAppService {

  private _characters: Result[] = [];
  private _pagination: string = '1';

  get character(): Result[]{
    return [...this._characters];
  }

  get pa(): string{
    return this._pagination;
  }

  set pagination(value: string){
    this._pagination = value;
  }

  // base url
  private baseURL = 'https://rickandmortyapi.com/api/'

  async getResult(name: string): Promise<Result[]>{

    try{

      const resp = await fetch(`${this.baseURL}character?page=${this._pagination}`);
      const data: RickAPIData = await resp.json();

      this._characters = data.results.filter(character => character.name.trim().toLowerCase().includes(name.trim().toLowerCase()));

      return this._characters;

    }
    catch(error){
      // retornar un arreglo vacío como resultado en caso de error
      return [];
    }

  }

}
