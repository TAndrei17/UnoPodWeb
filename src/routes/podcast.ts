import { Router } from 'express';
import fetchPodcast from '../services/fetchPodcast.js';
import { PodcastResponse } from '../models/Podcast.js';
import createObjectPodcast from '../utils/createObjectPodcast.js';
import routes from './routes.js';

const podcastRouter = Router();

podcastRouter.get(routes.podcast, async (req, res) => {
	try {
		const { id } = req.query;
		const idString = String(id);
		const data: PodcastResponse = await fetchPodcast({ id: idString });
		const podcast = createObjectPodcast(data);
		res.status(200).json([podcast]);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to load top podcasts' });
	}
});

export default podcastRouter;
