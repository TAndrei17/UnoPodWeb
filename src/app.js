import Express from 'express';
import { apiMarketingtools } from './api.js';
import createArrayPodcastsTop from './utils/createArrayPodcastsTop.js';

const app = new Express();

app.get('/podcastsTop/:country/limit/:limit', async (req, res) => {
	try {
		const { country, limit } = req.params;
		const url = `/api/v2/${country}/podcasts/top/${limit}/podcasts.json`;
		const { data } = await apiMarketingtools.get(url);
		const { results } = data.feed;
		const podcastsTop = createArrayPodcastsTop(results);
		res.json(podcastsTop);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Something went wrong' });
	}
});

export default app;

// const url = `/api/v2/${country}/podcasts/top/${limit}/podcasts.json`;
