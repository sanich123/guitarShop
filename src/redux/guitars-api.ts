import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const guitarsApi = createApi({
  reducerPath: 'guitarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
  endpoints: (builder) => ({
    getGuitars: builder.query({
      query: () => 'guitars',
    }),
    getGuitar: builder.query({
      query: (id = '') => `guitars?id=${id}`,
    }),
    filterStrings: builder.query({
      query: (stringCount = '') => `guitars?${stringCount}`,
    }),
  }),
});

export const { useGetGuitarsQuery, useGetGuitarQuery, useFilterStringsQuery } = guitarsApi;
