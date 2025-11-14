import apiItunes, { apiMarketingtools } from '../api.js';
import { PodcastsTopResponse } from '../models/PodcastItem.js';
import { createArrayPodcasts } from '../utils/createArrayPodcasts.js';
import createArrayPodcastsTop from '../utils/createArrayPodcastsTop.js';

const fetchPodcastsTop = async (country: string, limit: string) => {
	const url = `/api/v2/${country}/podcasts/top/${limit}/podcasts.json`;
	const urlITunes = `/${country}/rss/toppodcasts/limit=${limit}/json`;

	try {
		const { data }: { data: PodcastsTopResponse } = await apiMarketingtools.get(url);

		if (!data.feed?.results || data.feed.results.length === 0) {
			throw new Error('Marketingtools returned empty feed');
		}

		return createArrayPodcastsTop(data.feed.results);
	} catch {
		console.warn('Marketingtools API failed, using fallback to iTunes...');
	}

	// 2) Fallback → try iTunes RSS if Marketingtools is unavailable
	try {
		const { data } = await apiItunes.get(urlITunes);
		if (!data.feed?.entry) {
			throw new Error('iTunes RSS returned empty feed');
		}
		return createArrayPodcasts(data.feed.entry);
	} catch {
		throw new Error('Invalid response from upstream API');
	}
};

export default fetchPodcastsTop;
