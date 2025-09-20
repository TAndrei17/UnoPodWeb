import { Router, Request, Response } from 'express';

import apiItunes from '../api.js';
import { EpisodeItem, EpisodeParams } from '../models/EpisodesItem.js';
import createArrayEpisodes from '../utils/createArrayEpisodes.js';
import routes from './routes.js';

const episodeRouter = Router();

episodeRouter.get(
	routes.episode,
	async (req: Request<{}, {}, {}, EpisodeParams>, res: Response) => {
		try {
			const { url, podcast_id, episode_id } = req.query;
			const urlString = String(url);
			const podcastIdString = String(podcast_id);
			const { data }: { data: string } = await apiItunes.get(urlString);
			const episodes: EpisodeItem[] = createArrayEpisodes(data, podcastIdString);
			const episode: EpisodeItem | undefined = episodes.find((item) => item.id === episode_id);

			if (!episode) {
				return res.status(404).json({ error: 'Episode not found' });
			}

			res.status(200).json([episode]);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Failed to load episode' });
		}
	}
);

export default episodeRouter;
