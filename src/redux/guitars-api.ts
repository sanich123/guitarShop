import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const guitarsApi = createApi({
  reducerPath: 'guitarsApi',
  tagTypes: ['Guitars'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
  endpoints: (builder) => ({
    getGuitars: builder.query({
      query: (filter = '') => `guitars${filter}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }: {id: number}) => ({ type: 'Guitars', id })),
            { type: 'Guitars', id: 'LIST' },
          ]
          : [{ type: 'Guitars', id: 'LIST' }],
    }),
    addComment: builder.mutation({
      query: (body) => ({
        url: 'guitars/comments',
        method: 'POST',
        body,
      }),
      transformResponse: (_, meta) => meta,
      invalidatesTags: [{type: 'Guitars', id: 'LIST'}],
    }),
  }),
});

export const { useGetGuitarsQuery, useAddCommentMutation } = guitarsApi;
