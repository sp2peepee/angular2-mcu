import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreService }      from './app/core/core.service';

import { AppComponent  }         from './app/app.component';
import { NavComponent  }         from './app/nav/nav.component';
import { HomeComponent }         from './app/home/home.component';
import { StudioMoviesComponent } from './app/studio-movies/studio-movies.component';

@NgModule( {
	imports : [
		BrowserModule,
		AppRoutingModule
	],

	declarations : [
		AppComponent,
		NavComponent,
		HomeComponent,
		StudioMoviesComponent
	],

	bootstrap : [ AppComponent ],
	providers : [ CoreService ]
} )

export class AppModule { }