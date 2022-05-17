import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { apiMethods, apiRoutes, BASE_URL } from '../utils/const';

export const guitarsApi = createApi({
  reducerPath: `${apiRoutes.guitars}Api`,
  tagTypes: [`${apiRoutes.guitars}`, `${apiRoutes.comments}`],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getGuitars: builder.query({
      query: (filter = '') => `/${apiRoutes.guitars}${filter}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }: { id: number }) => ({ type: `${apiRoutes.guitars}`, id })),
            { type: `${apiRoutes.guitars}`, id: `${apiRoutes.guitars}List` },
          ]
          : [{ type: `${apiRoutes.guitars}`, id: `${apiRoutes.guitars}List` }],
    }),

    getGuitar: builder.query({
      query: (id = '') => `/${apiRoutes.guitars}/${id}`,
    }),

    getComments: builder.query({
      query: (id) => `/${apiRoutes.guitars}/${id}/${apiRoutes.comments}`,
      providesTags: (result) =>
        result ?
          [...result.map(({ id }: { id: number }) => ({ type: `${apiRoutes.comments}`, id })),
            { type: `${apiRoutes.comments}`, id: `${apiRoutes.comments}List` }]
          : [{ type: `${apiRoutes.comments}`, id: `${apiRoutes.comments}List` }],
    }),

    addComment: builder.mutation({
      query: (body) => ({
        url: `/${apiRoutes.comments}`,
        method: `${apiMethods.post}`,
        body,
      }),
      transformResponse: (_, meta) => meta,
      invalidatesTags: [{ type: `${apiRoutes.comments}`, id: `${apiRoutes.comments}List`}],
    }),

    addCoupon: builder.mutation({
      query: (body) => ({
        url: `/${apiRoutes.coupons}`,
        method: `${apiMethods.post}`,
        body,
      }),
    }),

    addOrder: builder.mutation({
      query: (body) => ({
        url: `/${apiRoutes.orders}`,
        method: `${apiMethods.post}`,
        body,
      }),
    }),
  }),
});

export const {
  useGetGuitarsQuery,
  useGetGuitarQuery,
  useGetCommentsQuery,
  useAddCommentMutation,
  useAddCouponMutation,
  useAddOrderMutation,
} = guitarsApi;
