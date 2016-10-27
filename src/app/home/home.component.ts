import { Component } from '@angular/core';

import { CoreService } from '../core/core.service';

import { Movie } from '../core/core-classes';

@Component ( {
	moduleId    : module.id,
	selector    : 'mcu-home',
	templateUrl : 'home.component.html',
	styleUrls   : [ 'home.component.css' ]
} )

export class HomeComponent {
	constructor(
		private coreService: CoreService
	) { }

	movies : movie[];

	getMovies() : void {
		this.coreService.getAllMovies().then(
			movies => this.movies = movies
		);
	}

	ngOnInit() : void {
		this.getMovies();
	}
}
