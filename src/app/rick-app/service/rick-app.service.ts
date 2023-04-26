import { Injectable } from '@angular/core';
import { Result, RickAPIData } from '../interface/rick-app.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAppService {

  private _characters: Result[] = [];
  private _pagination: string = '1';
  private charactersSubject = new Subject<Result[]>();

  getCharactersSubject(){
    return this.charactersSubject;
  }

  getCharacter(): Result[]{
    return this._characters;
  }

  setCharacter(value: Result[]){
    this._characters = value;
    this.charactersSubject.next(this._characters);
  }

  getPagination(): string{
    return this._pagination;
  }

  setPagination(value: string){
    this._pagination = value;
  }

  constructor(private http: HttpClient){}

  // base url
  private baseURL = 'https://rickandmortyapi.com/api/'

  getResult(): Observable<RickAPIData>{
    const url = `${this.baseURL}character?page=${this._pagination}`;
    return this.http.get<RickAPIData>(url);
  }

  getSingleCharacter(id: string): Observable<Result | null>{
    const url = `${this.baseURL}character/${id}`;
    return this.http.get<Result>(url)
    .pipe(
      catchError(error => of(null))
    );
  }

}
