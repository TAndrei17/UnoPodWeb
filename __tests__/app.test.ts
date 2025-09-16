import request from 'supertest';

import app from '../src/app.js';

test('podcastsTop', async () => {
	const res = await request(app).get('/podcasts/top').query({ country: 'es', limit: 5 });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});

test('podcastsByGenre', async () => {
	const res = await request(app)
		.get('/podcasts/genre')
		.query({ genre: 1489, country: 'us', limit: 5 });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});

test('podcastsByTerm', async () => {
	const res = await request(app).get('/podcasts/term').query({ term: 'Meduza', limit: 5 });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});

test('podcast', async () => {
	const res = await request(app).get('/podcasts/podcast').query({ id: '1719657632' });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});

test('episodes', async () => {
	const res = await request(app)
		.get('/podcast/episodes')
		.query({ url: 'https://feeds.megaphone.fm/RSV1597324942', podcast_id: '1492099371' });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});
