import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { TOKEN_COOKIE_NAME } from "@constants/index";
import { getLocalStorage } from "@utils/storage";
import { AxiosBase } from "./baseConfig";
import { Response } from "~types/index";

const axiosConf = AxiosBase.instance;

const baseURL =
  axiosConf.getBaseUrl() ||
  import.meta.env.VITE_APP_API_URL ||
  "https://api.test.com";

export const baseApi = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

baseApi.interceptors.request.use((config) => {
  if (getLocalStorage(TOKEN_COOKIE_NAME)) {
    const token = getLocalStorage(TOKEN_COOKIE_NAME);
    config.headers.Authorization = `${token}`;
  }
  return config;
});

baseApi.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosError<Response<null>>) => {
    const { data, status } = err.response!;

    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        // window.location.href = "/auth/login";
        break;

      case 403:
        // window.location.href = "/auth/login";

        break;

      case 404:
        // window.location.href = "/not-found";
        break;

      case 500:
        // window.location.href = "/server-error";
        break;

      default:
        break;
    }
    return Promise.reject(err);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// prettier-ignore
const request = {
  get: <T>(endpoint: string, headers?: AxiosHeaders) => baseApi.get<T>(endpoint, { headers }).then(responseBody),
  post: <T>(endpoint: string, body?: object, headers?: AxiosRequestConfig<object>) => baseApi.post<T>(endpoint, body, headers).then(responseBody),
  put: <T>(endpoint: string, body?: object, headers?: AxiosRequestConfig<object>) => baseApi.put<T>(endpoint, body, headers).then(responseBody),
  delete: <T>(endpoint: string, headers?: AxiosRequestConfig<object>) => baseApi.delete<T>(endpoint, headers).then(responseBody),
};

export default request;
