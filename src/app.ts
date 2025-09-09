import cors from 'cors';
import express, { Express } from 'express';

import routes from './routes.js';
import fetchPodcastsTop from './services/podcastsTop.js';

const app: Express = express();
app.use(cors());

app.get(routes.podcastsTop, async (req, res) => {
	try {
		const { country, limit } = req.params;

		// podcastsTop: podcastItem[]
		const podcastsTop = await fetchPodcastsTop(country, limit);
		res.status(200).json(podcastsTop);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to load top podcasts' });
	}
});

export default app;
