import request from 'supertest';
import app from '../src/app.js';

test('episodes', async () => {
	const res = await request(app)
		.get('/podcast/episodes')
		.query({ url: 'https://feeds.megaphone.fm/RSV1597324942', podcast_id: '1492099371' });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});
