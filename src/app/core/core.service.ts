import { Injectable } from '@angular/core';

import { Studio, Movie }  from './core-classes';
import { STUDIOS } from './mock-studios';
import { MOVIES } from './mock-movies';

@Injectable()
export class CoreService {
	getStudios() : Promise<Studio[]> {
		return Promise.resolve( STUDIOS );
	}

	getAllMovies() : Promise<Movie[]> {
		return Promise.resolve( MOVIES );
	}

	getMoviesByStudio( studioId : number ) : Promise<Movie[]> {
		return this.getAllMovies().then(
			movies => movies.filter( movie => movie.studioId === studioId )
		);
	}
}
