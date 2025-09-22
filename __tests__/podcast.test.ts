import request from 'supertest';
import app from '../src/app.js';

test('podcast', async () => {
	const res = await request(app).get('/podcasts/podcast').query({ id: '1719657632' });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});
