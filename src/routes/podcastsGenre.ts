import { Router, Request, Response } from 'express';
import { PodcastItem, PodcastsParams } from '../models/PodcastItem.js';
import routes from './routes.js';
import { fetchPodcastsByGenre } from '../services/fetchPodcasts.js';

const PodcastsByGenreRouter = Router();

PodcastsByGenreRouter.get(
	routes.byGenre,
	async (req: Request<{}, {}, {}, PodcastsParams>, res: Response) => {
		try {
			const { country, limit, genre } = req.query;
			const limitNum = Number(limit);
			const genreNum = Number(genre);
			const countryString = String(country);
			const podcasts: PodcastItem[] = await fetchPodcastsByGenre({
				country: countryString,
				limit: limitNum,
				genre: genreNum, // placeholder
				term: '', // placeholder
			});
			res.status(200).json(podcasts);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Failed to load podcasts' });
		}
	}
);

export default PodcastsByGenreRouter;
