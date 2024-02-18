import axios from 'axios';

export const axiosBaseQuery =
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
