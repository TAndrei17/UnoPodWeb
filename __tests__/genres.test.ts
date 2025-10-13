import request from 'supertest';
import app from '../src/app.js';

test('genres', async () => {
	const res = await request(app).get('/genres');

	expect(res.status).toBe(200);
	expect(Array.isArray(res.body)).toBe(true);
	expect(res.body).toHaveLength(22);

	const genre = res.body[0];
	expect(genre).toBeDefined();
	expect(genre.id).toBe(1301);
	expect(genre.name_en).toBe('Arts');
});
