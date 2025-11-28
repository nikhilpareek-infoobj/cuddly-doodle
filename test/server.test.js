const request = require('supertest');
const app = require('../src/index');

describe('Express Sample API', () => {
  test('GET / should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Hello from Express' });
  });

  test('GET /hello should greet by name query param', async () => {
    const res = await request(app).get('/hello').query({ name: 'Charlie' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Hello, Charlie!' });
  });

  test('POST /echo should echo posted JSON', async () => {
    const payload = { a: 1, b: 'two' };
    const res = await request(app).post('/echo').send(payload);
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toEqual(payload);
  });

  test('GET /users/:id returns user when present', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ id: 1, name: 'Alice' });
  });

  test('GET /users/:id returns 404 when not present', async () => {
    const res = await request(app).get('/users/999');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ error: 'User not found' });
  });
});
