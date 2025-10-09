import request from 'supertest';

import app from '../src/app.js';

test('podcastsByTerm', async () => {
	const res = await request(app).get('/podcasts/term').query({ term: 'Meduza', limit: 5 });
	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
});
