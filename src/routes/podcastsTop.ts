import { Router } from 'express';
import fetchPodcastsTop from '../services/fetchPodcastsTop.js';
import { PodcastItem } from '../models/PodcastItem.js';
import routes from './routes.js';

const podcastsTopRouter = Router();

podcastsTopRouter.get(routes.top, async (req, res) => {
	try {
		const { country, limit } = req.query;
		const podcastsTop: PodcastItem[] = await fetchPodcastsTop(String(country), String(limit));
		res.status(200).json(podcastsTop);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to load top podcasts' });
	}
});

export default podcastsTopRouter;
