import cors from 'cors';
import express, { Express } from 'express';
import router from './routes/index.js';
import path from 'path';

const app: Express = express();

const corsOptions = {
	origin:
		process.env.NODE_ENV === 'production'
			? 'https://unopod.expo.app'
			: ['https://unopod.expo.app', 'http://localhost:8081'],
	optionsSuccessStatus: 200,
};

app.use('/assets', express.static('public'));

app.use(cors(corsOptions));
app.use(express.json()); // for future
app.use('/', router);

export default app;
