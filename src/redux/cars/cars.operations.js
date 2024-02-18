import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../services/axios';

export const carsApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://65ccb08add519126b83f47b0.mockapi.io/api/a8',
  }),
  endpoints(builder) {
    return {
      getCars: builder.query({
        query: data => ({
          url: `/cars?search=${data.query}&page=${data.page}&limit=12`,
          method: 'get',
        }),
        keepUnusedDataFor: false,
      }),
    };
  },
});

export const { useGetCarsQuery } = carsApi;
