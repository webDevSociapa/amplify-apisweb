import useAuthStore from '@/store/userStore';
import { deleteCookie, getCookie } from 'cookies-next';
import fetch from 'cross-fetch';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getAuthHeaders = () => {
  const { authToken, deviceToken } = useAuthStore.getState();
  const locale = getCookie('NEXT_LOCALE');

  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  if (authToken) {
    headers.append('Authorization', `Bearer ${authToken}`);
  }

  if (deviceToken) {
    headers.append('deviceToken', deviceToken);
  }

  if (locale) {
    headers.append('lang', locale);
  }

  return headers;
};

const handleError = async (error) => {
  const { status, statusText } = error;
  const { clearTokens } = useAuthStore.getState();

  switch (status) {
    case 401:
      deleteCookie('buyer-auth-token');
      deleteCookie('buyer-user');
      deleteCookie('deviceToken');
      clearTokens();
      console.error('401 Unauthorized:', statusText);
      break;
    case 403:
      console.error('403 Forbidden:', statusText);
      break;
    case 400:
      console.error('400 Bad Request:', statusText);
      break;
    case 404:
      console.error('404 Not Found:', statusText);
      break;
    case 406:
      console.error('406 Not Acceptable:', statusText);
      break;
    case 498:
      console.error('498 Token Expired:', statusText);
      break;
    case 500:
      console.error('500 Internal Server Error:', statusText);
      break;
    default:
      console.error('Unexpected error:', statusText);
      break;
  }

  // Reject the promise with the error
  return Promise.reject(error);
};

const fetchWithInterceptors = async (url, options) => {
  options.headers = getAuthHeaders();

  try {
    const response = await fetch(`${BASE_URL}${url}`, options);

    if (!response.ok) {
      await handleError({
        status: response.status,
        statusText: response.statusText,
      });
    }

    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw error;
  }
};

const GetApi = async (url = '') => {
  try {
    const data = await fetchWithInterceptors(url, {
      method: 'GET',
      next: {
        revalidate: 300,
      },
    });

    return data;
  } catch (error) {
    console.error('Error during fetch:', error);
    // Ensure you return or handle the error to stop further processing
    throw error;
  }
};

const PostApi = async (url = '', reqBody = {}) => {
  try {
    const data = await fetchWithInterceptors(url, {
      method: 'POST',
      body: JSON.stringify(reqBody),
    });

    return data;
  } catch (error) {
    console.error('Error during fetch:', error);
    // Ensure you return or handle the error to stop further processing
    throw error;
  }
};

export const Api = {};
