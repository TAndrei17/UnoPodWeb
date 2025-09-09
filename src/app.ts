import cors from 'cors';
import express, { Express } from 'express';
import podcastsTopRouter from './routes/podcastsTop.js';

const app: Express = express();
app.use(cors());

app.use('/', podcastsTopRouter);

export default app;
