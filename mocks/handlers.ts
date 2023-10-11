import { rest } from 'msw';

export const handlers = [
  rest.get('/', (request, response, context) => {
    return response(context.status(200), context.json({ name: 'John' }));
  }),
];
