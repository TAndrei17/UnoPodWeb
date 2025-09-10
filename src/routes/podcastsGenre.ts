import { Router } from 'express';
import { PodcastItem } from '../models/PodcastItem.js';
import routes from './routes.js';
import { fetchPodcastsByGenre } from '../services/fetchPodcasts.js';

const PodcastsByGenreRouter = Router();

PodcastsByGenreRouter.get(routes.byGenre, async (req, res) => {
	try {
		const { country, limit, genre } = req.query;
		const limitNum = Number(limit);
		const genreNum = Number(genre);
		const countryString = String(country);
		const podcastsTop: PodcastItem[] = await fetchPodcastsByGenre({
			country: countryString,
			limit: limitNum,
			genre: genreNum, // placeholder
			term: '', // placeholder
		});
		res.status(200).json(podcastsTop);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to load podcasts' });
	}
});

export default PodcastsByGenreRouter;
