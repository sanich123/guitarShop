import { rest } from 'msw';
import { mockGuitars } from '../../mocks/mocks';
import { apiRoutes, BASE_URL } from '../../utils/const';

const handlers = [
  rest.get(`${BASE_URL}/${apiRoutes.guitars}`, (req, res, ctx) => res(ctx.json(mockGuitars))),
  rest.get(`${BASE_URL}/${apiRoutes.guitars}/3/comments`, (req, res, ctx) => res(ctx.json(mockGuitars))),
];

export { handlers };
