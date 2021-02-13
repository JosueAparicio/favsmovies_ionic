import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey: string = 'bbd00780';
  private url : string = '';
  constructor(private _http: HttpClient) { 
    
  }

  searchMovies(tittle: string, type: string){
    //console.log(type);
    
    this.url = `http://www.omdbapi.com/?s=${encodeURI(tittle)}&plot=full&page=2&type=${type}&apikey=${this.apiKey}`;
    //console.log(this.url);
    
    return this._http.get<Movie>(this.url).pipe(map(result => result['Search']));
  }

  getMovieDetails(id: string){
    return this._http.get<Movie>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }



}
