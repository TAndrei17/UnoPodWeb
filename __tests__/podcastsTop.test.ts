import request from 'supertest';
import app from '../src/app.js';

test('podcastsTop', async () => {
	const res = await request(app).get('/podcasts/top').query({ country: 'es', limit: 5 });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});
