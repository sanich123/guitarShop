import { rest } from 'msw';
import { mockGuitars } from '../../mocks/mocks';
import { apiRoutes, BASE_URL, searchParams } from '../../utils/const';

const handlers = [
  // rest.get(promoUrl, (req, res, ctx) => res(ctx.json(mockFilm))),
  // rest.get(`${rootUrl}${serverPath.favorite}`, (req, res, ctx) => res(ctx.json([mockFilm]))),
  rest.get(`${BASE_URL}/${apiRoutes.guitars}?${searchParams.similar}=8`, (req, res, ctx) => res(ctx.json(mockGuitars))),
  // rest.get(`${rootUrl}${serverPath.comments}/1`, (req, res, ctx) => res(ctx.json(mockComments))),
  // rest.get(`${rootUrl}${serverPath.films}/5/${serverPath.similar}`, (req, res, ctx) => res(ctx.json(mockFilms.slice(0, 4)))),
];

export { handlers };
