import { Router, Request, Response } from 'express';

import apiItunes from '../api.js';
import { EpisodeItem, EpisodesParams } from '../models/EpisodesItem.js';
import createArrayEpisodes from '../utils/createArrayEpisodes.js';
import routes from './routes.js';

const episodesRouter = Router();

episodesRouter.get(
	routes.episodes,
	async (req: Request<{}, {}, {}, EpisodesParams>, res: Response) => {
		try {
			const { url, podcast_id, limit, offset } = req.query;
			const urlString = String(url);
			const podcastIdString = String(podcast_id);
			const { data }: { data: string } = await apiItunes.get(urlString);
			const episodes: EpisodeItem[] = createArrayEpisodes(data, podcastIdString);

			if (!episodes.length) {
				return res.status(404).json({ error: 'Episodes not found' });
			}

			const limitNumber = limit ? parseInt(limit, 10) : 20;
			const offsetNumber = offset ? parseInt(offset, 10) : 0;

			const paginatedEpisodes = episodes.slice(offsetNumber, offsetNumber + limitNumber);

			res.status(200).json(paginatedEpisodes);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Failed to load podcast's episodes" });
		}
	}
);

export default episodesRouter;
