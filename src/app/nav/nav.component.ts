import { Component } from '@angular/core';
import { Router }    from '@angular/router'

import { CoreService } from '../core/core.service';

import { Studio } from '../core/core-classes';

@Component( {
	moduleId    : module.id,
	selector    : 'mcu-nav',
	templateUrl : 'nav.component.html',
	styleUrls   : [ 'nav.component.css' ]
} )

export class NavComponent {
	constructor(
		private router : Router,
		private coreService : CoreService
	) { }

	studios : Studio[];

	selectedStudio : number;

	getStudios() : void {
		this.coreService.getStudios().then(
			studios => this.studios = studios
		);
	}

	goToStudio( studioId : number ) : void {
		this.selectedStudio = studioId;
		this.router.navigate( [ '/studio', studioId ] );
	}

	goToHome() : void {
		this.router.navigate( [ '/' ] );
	}

	ngOnInit() : void {
		this.getStudios();
	}
}
