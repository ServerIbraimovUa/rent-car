import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  (
    { baseUrl } = {
      baseUrl: 'https://65ccb08add519126b83f47b0.mockapi.io/api/a8',
    }
  ) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const carsApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://65ccb08add519126b83f47b0.mockapi.io/api/a8',
  }),
  endpoints(builder) {
    return {
      getCars: builder.query({
        query: (page = 1) => ({
          url: `/cars?page=${page}&limit=12`,
          method: 'get',
        }),
      }),
    };
  },
});

export const { useGetCarsQuery } = carsApi;
