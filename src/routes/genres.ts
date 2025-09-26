import { Router } from 'express';

import genres from '../data/genresData.js';

const genresRouter = Router();

genresRouter.get('/', (req, res) => {
	try {
		if (!genres || genres.length < 1) {
			return res.status(404).json({ error: 'Genres not found' });
		}

		const protocol = req.headers['x-forwarded-proto'] || req.protocol;
		const host = req.headers.host;

		const genresWithFullUrl = genres.map((cat) => ({
			...cat,
			image: `${protocol}://${host}${cat.image}`,
		}));

		res.json(genresWithFullUrl);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to load genres' });
	}
});

export default genresRouter;
