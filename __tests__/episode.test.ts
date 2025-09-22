import request from 'supertest';
import app from '../src/app.js';

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
