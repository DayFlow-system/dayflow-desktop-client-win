import { http, HttpResponse } from 'msw';
import { block, dayState, event, task, today } from './fixtures';

const base = 'http://localhost:3000';

// MSW handlers mirror the DayFlow endpoints and can replace per-test fetch mocks when scenarios grow.
export const handlers = [
  http.get(`${base}/health`, () => HttpResponse.json({ status: 'ok' })),
  http.get(`${base}/today`, () => HttpResponse.json(today)),
  http.get(`${base}/tasks`, () => HttpResponse.json([task])),
  http.post(`${base}/tasks`, async () => HttpResponse.json(task, { status: 201 })),
  http.patch(`${base}/tasks/:id`, async () => HttpResponse.json(task)),
  http.delete(`${base}/tasks/:id`, () => new HttpResponse(null, { status: 204 })),
  http.get(`${base}/events`, () => HttpResponse.json([event])),
  http.post(`${base}/events`, async () => HttpResponse.json(event, { status: 201 })),
  http.patch(`${base}/events/:id`, async () => HttpResponse.json(event)),
  http.delete(`${base}/events/:id`, () => new HttpResponse(null, { status: 204 })),
  http.get(`${base}/schedule`, () => HttpResponse.json([block])),
  http.get(`${base}/schedule/today`, () => HttpResponse.json([block])),
  http.post(`${base}/schedule`, async () => HttpResponse.json(block, { status: 201 })),
  http.patch(`${base}/schedule/:id`, async () => HttpResponse.json(block)),
  http.delete(`${base}/schedule/:id`, () => new HttpResponse(null, { status: 204 })),
  http.get(`${base}/day-state/today`, () => HttpResponse.json(dayState)),
  http.put(`${base}/day-state/today`, async () => HttpResponse.json(dayState)),
];
