import cors from 'cors';
import express, { Express } from 'express';

import episodesRouter from './routes/episodes.js';
import episodeRouter from './routes/episode.js';
import podcastRouter from './routes/podcast.js';
import podcastsByGenreRouter from './routes/podcastsGenre.js';
import podcastsByTermRouter from './routes/podcastsTerm.js';
import podcastsTopRouter from './routes/podcastsTop.js';

const app: Express = express();

app.use(
	cors({
		origin: 'https://unopod.expo.app', // allow only this domain
		optionsSuccessStatus: 200,
	})
);

app.use('/podcasts', podcastsTopRouter);
app.use('/podcasts', podcastsByGenreRouter);
app.use('/podcasts', podcastsByTermRouter);
app.use('/podcasts', podcastRouter);
app.use('/podcast', episodesRouter);
app.use('/podcast', episodeRouter);

export default app;
