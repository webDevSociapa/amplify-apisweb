'use client';

import { useEffect, useState } from 'react';
import { deleteCookie, getCookie } from 'cookies-next';
import { toast } from 'sonner';

import { STATUS_CODE, TOAST_MESSAGES } from './constants';

export const is12HourFormat = (format) => format === '12 hour';

export const cleanCookies = () => {
  deleteCookie('buyer-auth-token');
  deleteCookie('buyer-user');
  deleteCookie('deviceToken');
};

export const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }
  // Return undefined if window is not defined (e.g., during SSR)

  return {
    width: undefined,
    height: undefined,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function handleResize() {
    if (typeof window !== 'undefined') {
      setWindowDimensions(getWindowDimensions());
    }
  }

  useEffect(() => {
    // Ensure this code is not executed on the server
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      // Clean up the event listener on unmount

      return () => window.removeEventListener('resize', handleResize);
    }

    // Add a return statement to fix the problem
    return undefined;
  }, []);

  return windowDimensions;
};

export const isCodeError = (data) => {
  if (
    data?.meta?.code === STATUS_CODE.FAIL ||
    data?.meta?.code === STATUS_CODE.EMAIL_NOT_VERIFIED
  ) {
    toast.error(data?.meta?.message);

    return true;
  }

  return false;
};

export const isCodeSuccess = (data) => {
  if (data?.meta?.code === STATUS_CODE.SUCCESS) {
    toast.success(data?.meta?.message);

    return true;
  }
};

export const isActive = (routerPath, path) => {
  const normalizedRouterPath = routerPath.replace(/^\/[a-zA-Z]{2}(\/|$)/, '/');
  const normalizedPathUrl = path.url.replace(/^\/[a-zA-Z]{2}(\/|$)/, '/');

  if (normalizedRouterPath === '/' && normalizedPathUrl === '/') {
    return true;
  } else if (
    normalizedPathUrl !== '/' &&
    (normalizedRouterPath.startsWith(normalizedPathUrl) ||
      normalizedRouterPath === normalizedPathUrl)
  ) {
    return true;
  }
  return false;
};

export const uploadImage = (imageBlob, presignedURL) => {
  const locale = getCookie('NEXT_LOCALE');
  const customHeaders = {
    'Content-Type': imageBlob.type,
    lang: locale || 'en',
  };

  uploadFilePresignedURL(presignedURL, imageBlob, customHeaders);
};

export const uploadFilePresignedURL = async (url, file, customHeaders) => {
  const locale = getCookie('NEXT_LOCALE');

  try {
    const headers = customHeaders
      ? { ...customHeaders }
      : {
          'Content-Type': 'image/png',
          lang: locale || 'en',
        };

    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: file,
    });

    if (!response.ok) {
      throw new Error(TOAST_MESSAGES.ERROR_UPLOADING_FILE);
    }
    const contentType = response.headers.get('Content-Type');
    
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    toast.error(TOAST_MESSAGES.ERROR_UPLOADING_FILE);
    throw error;
  }
};

// To remove empty object fields
export const removeEmptyObjectFields = (obj) => {
  const object = obj;

  for (const key in object) {
    if (
      object[key] === undefined ||
      object[key] === null ||
      object[key] === ''
    ) {
      delete object[key];
    }
  }

  return object;
};

// Create query params
export const convertToQueryParams = (data) => {
  const flattened = data.reduce((acc, curr) => {
    const key = Object.keys(curr)[0];

    acc[key] = curr[key];

    return acc;
  }, {});

  const queryString = Object.keys(flattened)
    .map((key) => `${key}=${flattened[key].join(',')}`)
    .join('&');

  return queryString || '';
};
