import { Router } from 'express';
import fetchPodcastsTop from '../services/podcastsTop.js';
import { PodcastItem } from '../models/PodcastItem.js';
import routes from './routes.js';

const router = Router();

router.get(routes.podcastsTop, async (req, res) => {
	try {
		const { country, limit } = req.params;
		const podcastsTop: PodcastItem[] = await fetchPodcastsTop(country, limit);
		res.status(200).json(podcastsTop);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to load top podcasts' });
	}
});

export default router;
