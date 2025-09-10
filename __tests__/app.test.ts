import request from 'supertest';
import app from '../src/app';

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
