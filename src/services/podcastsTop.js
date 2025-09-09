import { apiMarketingtools } from '../api.js';
import createArrayPodcastsTop from '../utils/createArrayPodcastsTop.js';

const fetchPodcastsTop = async (country, limit) => {
	const url = `/api/v2/${country}/podcasts/top/${limit}/podcasts.json`;
	const { data } = await apiMarketingtools.get(url);

	if (!data?.feed?.results) {
		throw new Error('Invalid response from upstream API');
	}

	return createArrayPodcastsTop(data.feed.results);
};

export default fetchPodcastsTop;
