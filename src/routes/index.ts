import { Router } from 'express';
import podcastsTopRouter from './podcastsTop.js';
import podcastsByGenreRouter from './podcastsGenre.js';
import podcastsByTermRouter from './podcastsTerm.js';
import podcastRouter from './podcast.js';
import episodesRouter from './episodes.js';
import episodeRouter from './episode.js';

const router = Router();

router.use('/podcasts', podcastsTopRouter);
router.use('/podcasts', podcastsByGenreRouter);
router.use('/podcasts', podcastsByTermRouter);
router.use('/podcasts', podcastRouter);

router.use('/podcast', episodesRouter);
router.use('/podcast', episodeRouter);

export default router;
