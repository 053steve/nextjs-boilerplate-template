import { parseCookies } from 'nookies'


export const requestInterceptor = (config: any) => {
    // Do something before request is sent
    // console.log('request interceptor working');
    const cookies = parseCookies();
    const {auth_token} = cookies

    if (auth_token) {
        config.headers['Authorization'] = `bearer ${auth_token}`;
    }
    return config;
}

export const responseInterceptor = (response: any) => {
    console.log(response);
    if (response?.status === 200 || response?.status === 201) {
        return response;
    }

    throw new Error(response.message);
}

export const errrorInterceptor = (error: Error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
}