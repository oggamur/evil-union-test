import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const BACKEND_URL = 'https://pokeapi.co/api/v2/';
const REQUEST_TIMEOUT = 5000;
type DetailMessageType = {
  type: string;
  message: string;
};

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) =>
  !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config;
  });


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;
        const message =
          (typeof detailMessage === 'object' && detailMessage !== null && 'message' in detailMessage)
            ? (detailMessage as DetailMessageType).message
            : `Request failed with status ${error.response.status}`;
        toast.warn(message, { toastId: error.response.status });
      } else if (!error.response) {
        toast.warn('Network error. Please check your connection.', { toastId: 'network-error' });
      }

      throw error;
    }
  );

  return api;
};
