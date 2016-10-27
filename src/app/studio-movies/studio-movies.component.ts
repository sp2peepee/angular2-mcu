import { Component, Input }       from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CoreService } from '../core/core.service';

import { Movie } from '../core/core-classes';

@Component ( {
	moduleId    : module.id,
	selector    : 'mcu-stud-movies',
	templateUrl : 'studio-movies.component.html',
	styleUrls   : [ 'studio-movies.component.css' ]
} )

export class StudioMoviesComponent {
	movies : movie[];

	constructor(
		private route       : ActivatedRoute,
		private coreService : CoreService
	) { }

	movies : movie[];

	getStudioMovies() : void {
		this.route.params.forEach( ( params: Params ) => {
			let id = +params[ 'id' ];

			this.coreService.getMoviesByStudio( id ).then(
				movies => this.movies = movies
			);
		} )
	}

	ngOnInit() : void {
		this.getStudioMovies();
	}
}
