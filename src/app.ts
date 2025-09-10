import cors from 'cors';
import express, { Express } from 'express';
import podcastsTopRouter from './routes/podcastsTop.js';
import podcastsByGenreRouter from './routes/podcastsGenre.js';
import podcastsByTermRouter from './routes/podcastsTerm.js';

const app: Express = express();
app.use(cors());

app.use('/podcasts', podcastsTopRouter);
app.use('/podcasts', podcastsByGenreRouter);
app.use('/podcasts', podcastsByTermRouter);

export default app;
