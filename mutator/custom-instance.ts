import Axios, { AxiosRequestConfig } from 'axios';
import {requestInterceptor, responseInterceptor, errrorInterceptor} from '../middleware/interceptor';

export const AXIOS_INSTANCE = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_AXIOS_BASEURL,
    withCredentials: false,
    headers: { 'Access-Control-Allow-Origin': '*'}
});

AXIOS_INSTANCE.interceptors.request.use(requestInterceptor, errrorInterceptor);
AXIOS_INSTANCE.interceptors.response.use(responseInterceptor, errrorInterceptor);

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
    const source = Axios.CancelToken.source();
    const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
        ({ data }) => data,
    );

    // @ts-ignore
    promise.cancel = () => {
        source.cancel('Query was cancelled by React Query');
    };

    return promise;
};

export default customInstance;