import api from '../api.js';
import { PodcastsByTermResponse, PodcastsParams } from '../models/PodcastItem.js';
import { createArrayPodcasts, createArrayPodcastsByTerm } from '../utils/createArrayPodcasts.js';

const fetchPodcastsByTerm = async (params: PodcastsParams) => {
	const { limit, term } = params;

	if (!term && term.trim().length < 1) {
		throw new Error('Failed to get podcasts');
	}

	const url = `/search?media=podcast&term=${term}&limit=${limit}`;
	const { data }: { data: PodcastsByTermResponse } = await api.get(url);
	const results = Array.isArray(data?.results) ? data.results : [];
	return createArrayPodcastsByTerm(results);
};

const fetchPodcastsByGenre = async (params: PodcastsParams) => {
	const { country, limit, genre } = params;

	const url = `/${country}/rss/toppodcasts/limit=${limit}/genre=${genre}/json`;
	const { data } = await api.get(url);
	const { entry } = data.feed;
	return createArrayPodcasts(entry);
};

export { fetchPodcastsByTerm, fetchPodcastsByGenre };
