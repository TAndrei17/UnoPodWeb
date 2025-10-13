import { Router } from 'express';

import genres from '../data/genresData.js';

const genresRouter = Router();

genresRouter.get('/', (req, res) => {
	try {
		if (!genres || genres.length < 1) {
			return res.status(404).json({ error: 'Genres not found' });
		}

		res.json(genres);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to load genres' });
	}
});

export default genresRouter;
