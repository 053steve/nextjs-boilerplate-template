

export const requestInterceptor = (config: any) => {
    // Do something before request is sent
    console.log('request interceptor working');
    return config;
}

export const responseInterceptor = (response: any) => {
    if (response?.status === 200 || response?.status === 201) {
        return response.data;
    }

    throw new Error(response.message);
}

export const errrorInterceptor = (error: Error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
}