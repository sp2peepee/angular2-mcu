export class Studio {
	id       : number;
	studName : string;
}

export class Movie {
	id         : number;
	studioId   : number;
	movieTitle : string;
	phaseId    : number;
	posterLink : string;
}
