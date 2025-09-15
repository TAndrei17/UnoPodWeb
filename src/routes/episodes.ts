import { Router, Request, Response } from 'express';
import apiItunes from '../api.js';
import { EpisodeItem, EpisodesParams } from '../models/EpisodesItem.js';
import createArrayEpisodes from '../utils/createArrayEpisodes.js';

const episodesRouter = Router();

episodesRouter.get('/episodes', async (req: Request<{}, {}, {}, EpisodesParams>, res: Response) => {
	try {
		const { url, podcast_id } = req.query;
		const urlString = String(url);
		const podcastIdString = String(podcast_id);
		const { data }: { data: string } = await apiItunes.get(urlString);
		const episodes: EpisodeItem[] = createArrayEpisodes(data, podcastIdString);
		res.status(200).json(episodes);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to load top podcasts' });
	}
});

export default episodesRouter;
