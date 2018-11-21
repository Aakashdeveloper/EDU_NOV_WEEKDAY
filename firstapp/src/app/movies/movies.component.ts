import { Component, OnInit } from '@angular/core';
import { IMovies } from './movies.model';
import { MoviesService } from './movies.services';

@Component({
    templateUrl: './movies.component.html'
})

export class MoviesComponent implements OnInit {

    title: String = 'Movies Page';
    movies: IMovies[];
    selectMovies: IMovies[];

    constructor(private _moviesService: MoviesService) {}

    ngOnInit(): void {
        this._moviesService.getMovies()
                .subscribe((data: IMovies[]) => {
                    this.movies = data;
                });
    }

    onSelect(movies: IMovies[]): void {
        console.log(movies);
        this.selectMovies = movies;
    }
}
