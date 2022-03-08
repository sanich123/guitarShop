import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const guitarsApi = createApi({
  reducerPath: 'guitarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
  endpoints: (builder) => ({
    getGuitars: builder.query({
      query: (filter = '') => `guitars?${filter}`,
    }),
  }),
});

export const { useGetGuitarsQuery } = guitarsApi;
