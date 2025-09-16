export interface Podcast {
	id: string;
	artistName: string;
	collectionName: string;
	feedUrl: string; // episodes
	artworkUrl30: string;
	artworkUrl60: string;
	artworkUrl100: string;
	releaseDate: string;
	trackCount: string;
	country: string;
	primaryGenreName: string;
	kind?: string;
	collectionExplicitness?: string;
	trackExplicitness?: string;
	trackTimeMillis?: string;
	contentAdvisoryRating?: string;
	genreIds?: string[];
	genres?: string[];
}

export interface PodcastParams {
	id: string;
}

export type PodcastResponse = {
	resultCount: string;
	results: [
		{
			wrapperType: string;
			kind: string;
			collectionId: string;
			trackId: string;
			artistName: string;
			collectionName: string;
			trackName: string;
			collectionCensoredName: string;
			trackCensoredName: string;
			collectionViewUrl: string;
			feedUrl: string; // episodes
			trackViewUrl: string;
			artworkUrl30: string;
			artworkUrl60: string;
			artworkUrl100: string;
			collectionPrice: string;
			trackPrice: string;
			collectionHdPrice: string;
			releaseDate: string;
			collectionExplicitness: string;
			trackExplicitness: string;
			trackCount: string;
			trackTimeMillis: string;
			country: string;
			currency: string;
			primaryGenreName: string;
			contentAdvisoryRating: string;
			artworkUrl600: string;
			genreIds: string[];
			genres: string[];
		}
	];
};
