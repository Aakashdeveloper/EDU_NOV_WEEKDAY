import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from './movies.model';

@Injectable()

export class MoviesService {
    private _moviesUrl =  'https://ngmovies.herokuapp.com/api/getMovies';

    constructor(private _http: HttpClient) {}

    getMovies(): Observable<IMovies[]> {
        return this._http.get<IMovies[]>(this._moviesUrl);
    }
}
