import request from 'supertest';
import app from '../src/app.js';

test('image file exists and is served correctly', async () => {
	const res = await request(app).get('/assets/images/family.jpg');
	expect(res.status).toBe(200);
	expect(res.header['content-type']).toMatch(/^image\//);
});
