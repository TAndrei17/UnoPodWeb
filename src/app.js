import cors from 'cors';
import Express from 'express';

import routes from './routes.js';
import fetchPodcastsTop from './services/podcastsTop.js';

const app = new Express();
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
