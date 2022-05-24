import { server } from './../src/tests/server';
import '@testing-library/jest-dom/extend-expect';

process.env.DEBUG_PRINT_LIMIT = '15000';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
