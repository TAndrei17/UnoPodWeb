import cors from 'cors';
import express, { Express } from 'express';
import router from './routes/index.js';

const app: Express = express();

const corsOptions = {
	origin:
		process.env.NODE_ENV === 'production'
			? 'https://unopod.expo.app'
			: ['https://unopod.expo.app', 'http://localhost:4000'],
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); // for future
app.use('/', router);

export default app;
