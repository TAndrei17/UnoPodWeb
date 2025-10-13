import { Router } from 'express';

import episodeRouter from './episode.js';
import episodesRouter from './episodes.js';
import genresRouter from './genres.js';
import podcastRouter from './podcast.js';
import podcastsByGenreRouter from './podcastsGenre.js';
import podcastsByTermRouter from './podcastsTerm.js';
import podcastsTopRouter from './podcastsTop.js';

const router = Router();

router.use('/genres', genresRouter);
router.use('/podcasts', podcastsTopRouter);
router.use('/podcasts', podcastsByGenreRouter);
router.use('/podcasts', podcastsByTermRouter);
router.use('/podcasts', podcastRouter);

router.use('/podcast', episodesRouter);
router.use('/podcast', episodeRouter);

export default router;
