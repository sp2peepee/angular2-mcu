import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }         from './app/home/home.component';
import { StudioMoviesComponent } from './app/studio-movies/studio-movies.component';

const routes: Routes = [
	{
		path      : '',
		component : HomeComponent
	},
	{
		path      : 'studio/:id',
		component : StudioMoviesComponent
	}
];

@NgModule( {
	imports : [ RouterModule.forRoot( routes ) ],
	exports : [ RouterModule ]
} )

export class AppRoutingModule { }
