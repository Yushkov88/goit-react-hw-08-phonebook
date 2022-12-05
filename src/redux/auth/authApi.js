import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../contacts/baseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getAuth: builder.query({
      query: () => `/users/current`,
      providesTags: ['Auth'],
    }),

    register: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),

    login: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useGetAuthQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApi;
