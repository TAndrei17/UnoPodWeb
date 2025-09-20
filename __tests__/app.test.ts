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

test('episode', async () => {
	const res = await request(app).get('/podcast/episode').query({
		url: 'https://feeds.transistor.fm/37107aa2-7710-4afa-a427-77bec3de7594',
		podcast_id: '1492099371',
		episode_id: 'расстрел-рабочих-в-минске',
	});

	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
	expect(res.body).toHaveLength(1);

	const episode = res.body[0];
	expect(episode).toBeDefined();
	expect(episode.id).toBe('расстрел-рабочих-в-минске');
	expect(episode.podcast_id).toBe('1492099371');
	expect(episode).toHaveProperty('title');
	expect(episode).toHaveProperty('description');
	expect(episode).toHaveProperty('mp3Url');
});

test('episode with incorrect ID', async () => {
	const res = await request(app).get('/podcast/episode').query({
		url: 'https://feeds.transistor.fm/37107aa2-7710-4afa-a427-77bec3de7594',
		podcast_id: '1492099371',
		episode_id: 'расстрел-рабочих-',
	});
	expect(res.status).toBe(404);
});
