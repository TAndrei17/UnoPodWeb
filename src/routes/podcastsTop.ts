import { Router, Request, Response } from 'express';

import routes from './routes.js';
import { PodcastItem, PodcastsTopRequest } from '../models/PodcastItem.js';
import fetchPodcastsTop from '../services/fetchPodcastsTop.js';

const podcastsTopRouter = Router();

podcastsTopRouter.get(
	routes.top,
	async (req: Request<{}, {}, {}, PodcastsTopRequest>, res: Response) => {
		try {
			const { country, limit } = req.query;
			const podcastsTop: PodcastItem[] = await fetchPodcastsTop(String(country), String(limit));

			if (!podcastsTop || !podcastsTop.length) {
				return res.status(404).json({ error: 'Podcasts not found' });
			}

			res.status(200).json(podcastsTop);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Failed to load top podcasts' });
		}
	}
);

export default podcastsTopRouter;
