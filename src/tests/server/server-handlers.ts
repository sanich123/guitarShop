import { rest } from 'msw';
import { mockComments, mockGuitars } from '../../mocks/mocks';
import { apiRoutes, BASE_URL } from '../../utils/const';

const handlers = [
  rest.get(`${BASE_URL}/${apiRoutes.guitars}`, (req, res, ctx) => res(ctx.json(mockGuitars))),
  rest.get(`${BASE_URL}/${apiRoutes.guitars}/3/comments`, (req, res, ctx) => res(ctx.json(mockComments))),
  rest.get(`${BASE_URL}/${apiRoutes.guitars}/2/comments`, (req, res, ctx) => res(ctx.json(mockComments))),
  rest.get(`${BASE_URL}/${apiRoutes.guitars}/1/comments`, (req, res, ctx) => res(ctx.json(mockComments))),
  rest.get(`${BASE_URL}/guitars/3`, (req, res, ctx) => res(ctx.json(mockGuitars[2]))),
];

export { handlers };
