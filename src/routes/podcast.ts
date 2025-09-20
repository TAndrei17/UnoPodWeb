import { Router, Request, Response } from 'express';

import routes from './routes.js';
import { Podcast, PodcastParams, PodcastResponse } from '../models/Podcast.js';
import fetchPodcast from '../services/fetchPodcast.js';
import createObjectPodcast from '../utils/createObjectPodcast.js';

const podcastRouter = Router();

podcastRouter.get(
	routes.podcast,
	async (req: Request<{}, {}, {}, PodcastParams>, res: Response) => {
		try {
			const { id } = req.query;
			const idString = String(id);
			const data: PodcastResponse = await fetchPodcast({ id: idString });
			const podcast: Podcast = createObjectPodcast(data);
			res.status(200).json([podcast]);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Failed to load top podcast' });
		}
	}
);

export default podcastRouter;
