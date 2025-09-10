import { Podcast, PodcastResponse } from '../models/Podcast.js';

const createObjectPodcast = (data: PodcastResponse): Podcast => {
	const { results } = data;
	const [resultsData] = results;

	const {
		collectionId: id,
		artistName,
		collectionName,
		feedUrl,
		artworkUrl30,
		artworkUrl60,
		artworkUrl100,
		releaseDate,
		trackCount,
		country,
		primaryGenreName,
		kind,
		collectionExplicitness,
		trackExplicitness,
		trackTimeMillis,
		contentAdvisoryRating,
		genreIds,
		genres,
	} = resultsData;

	return {
		id,
		artistName,
		collectionName,
		feedUrl,
		artworkUrl30,
		artworkUrl60,
		artworkUrl100,
		releaseDate,
		trackCount,
		country,
		primaryGenreName,
		kind,
		collectionExplicitness,
		trackExplicitness,
		trackTimeMillis,
		contentAdvisoryRating,
		genreIds,
		genres,
	};
};

export default createObjectPodcast;
