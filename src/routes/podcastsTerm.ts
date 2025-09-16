import { Router, Request, Response } from 'express';

import routes from './routes.js';
import { PodcastItem, PodcastsParams } from '../models/PodcastItem.js';
import { fetchPodcastsByTerm } from '../services/fetchPodcasts.js';

const PodcastsByTermRouter = Router();

PodcastsByTermRouter.get(
	routes.byTerm,
	async (req: Request<{}, {}, {}, PodcastsParams>, res: Response) => {
		try {
			const { term, limit, country, genre } = req.query;
			const termString = String(term);
			const countryString = String(country);
			const genreNum = Number(genre);
			const limitNum = Number(limit);
			const podcasts: PodcastItem[] = await fetchPodcastsByTerm({
				term: termString,
				limit: limitNum,
				country: countryString, // placeholder
				genre: genreNum, // placeholder
			});
			res.status(200).json(podcasts);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Failed to load podcasts' });
		}
	}
);

export default PodcastsByTermRouter;
