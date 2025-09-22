import { Router, Request, Response } from 'express';

import routes from './routes.js';
import { PodcastItem, PodcastsParams } from '../models/PodcastItem.js';
import { fetchPodcastsByGenre } from '../services/fetchPodcasts.js';

const PodcastsByGenreRouter = Router();

PodcastsByGenreRouter.get(
	routes.byGenre,
	async (req: Request<{}, {}, {}, PodcastsParams>, res: Response) => {
		try {
			const { country, limit, genre } = req.query;
			const limitNum = limit ? Number(limit) : 20;
			const genreNum = genre ? Number(genre) : 1489;
			const countryString = String(country);

			const podcasts: PodcastItem[] = await fetchPodcastsByGenre({
				country: countryString,
				limit: limitNum,
				genre: genreNum,
				term: '', // placeholder
			});

			if (!podcasts || !podcasts.length) {
				return res.status(404).json({ error: 'Podcasts not found' });
			}

			res.status(200).json(podcasts);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Failed to load podcasts' });
		}
	}
);

export default PodcastsByGenreRouter;
