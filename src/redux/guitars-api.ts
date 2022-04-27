import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/const';

export const guitarsApi = createApi({
  reducerPath: 'guitarsApi',
  tagTypes: ['Guitars'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getGuitars: builder.query({
      query: (filter = '') => `/guitars${filter}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }: {id: number}) => ({ type: 'Guitars', id })),
            { type: 'Guitars', id: 'LIST' },
          ]
          : [{ type: 'Guitars', id: 'LIST' }],
    }),

    getGuitar: builder.query({
      query: (id = '') => `/guitars/${id}`,
    }),

    getComments: builder.query({
      query: (id) => `/guitars/${id}/comments`,
    }),

    addComment: builder.mutation({
      query: (body) => ({
        url: '/comments',
        method: 'POST',
        body,
      }),
      transformResponse: (_, meta) => meta,
      invalidatesTags: [{type: 'Guitars', id: 'LIST'}],
    }),
  }),
});

export const {
  useGetGuitarsQuery,
  useAddCommentMutation,
  useGetGuitarQuery,
  useGetCommentsQuery,
} = guitarsApi;
