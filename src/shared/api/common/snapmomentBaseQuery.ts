import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://inctagram.work/api/',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');

    if (headers.get('Authorization')) {
      return headers;
    }

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }
});

export const baseQueryWithReauth: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  try {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    const result = await baseQuery(args, api, extraOptions);

    //
    // Нужна логика для update token, если падает запрос с ошибкой (rtkq дока, с небольшим рефектором)
    //

    return result;
  } catch (e) {
    return {
      error: {
        error: String(e),
        status: 'FETCH_ERROR'
      }
    };
  }
};
