export interface PodcastItem {
	id: string;
	image: string;
	author: string;
	podcast: string;
	label: string;
}

export type PodcastItemByTerm = {
	wrapperType: string;
	kind: string;
	artistId: number;
	collectionId: number;
	trackId: number;
	artistName: string;
	collectionName: string;
	trackName: string;
	collectionCensoredName: string;
	trackCensoredName: string;
	artistViewUrl: string;
	collectionViewUrl: string;
	feedUrl: string;
	trackViewUrl: string;
	artworkUrl30: string;
	artworkUrl60: string;
	artworkUrl100: string;
	collectionPrice: number;
	trackPrice: number;
	collectionHdPrice: number;
	releaseDate: string;
	collectionExplicitness: string;
	trackExplicitness: string;
	trackCount: number;
	country: string;
	currency: string;
	primaryGenreName: string;
	contentAdvisoryRating: string;
	artworkUrl600: string;
	genreIds: string[];
	genres: string[];
};

export interface PodcastsParams {
	country: string;
	limit: number;
	genre: number;
	term: string;
}

// Comes from iTunes using a search term
export interface PodcastsByTermResponse {
	resultCount: number;
	results: PodcastItemByTerm[];
}

export type PodcastTop = {
	artistName: string;
	id: string;
	name: string;
	kind: string;
	contentAdvisoryRating: string;
	artworkUrl100: string;
	genres: {
		genreId: string;
		name: string;
		url: string;
	}[];
	url: string;
};

// TOP PODCASTS REQUEST/RESPONSE PARAMS
export interface PodcastsTopRequest {
	country: string;
	limit: number;
}

export type PodcastsTopResponse = {
	feed: {
		title: string;
		id: string;
		author: {
			name: string;
			url: string;
		};
		links: {
			self: string;
		}[];
		copyright: string;
		country: string;
		icon: string;
		updated: Date;
		results: PodcastTop[];
	};
};
