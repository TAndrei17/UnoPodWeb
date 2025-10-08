import cors from 'cors';
import express, { Express } from 'express';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app: Express = express();

const corsOptions = {
	origin:
		process.env.NODE_ENV === 'production'
			? 'https://unopod.expo.app'
			: ['https://unopod.expo.app', 'http://localhost:8081'],
	optionsSuccessStatus: 200,
};

// Convert the module's URL (...app.ts) to an absolute file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory path of the current file
const __dirname = path.dirname(__filename);
// Serve static files from 'public/assets' at the '/assets' route
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

app.use(cors(corsOptions));
app.use(express.json()); // for future
app.use('/', router);

export default app;
