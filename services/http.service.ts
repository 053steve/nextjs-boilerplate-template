import axios from "axios";

class HttpService {

    instance: any;

    constructor() {
        this.setupInstance();
    }

    setupInstance() {
        this.instance = axios.create();
        this.instance.interceptors.request.use(function (config) {
            // Do something before request is sent
            console.log('request interceptor working');
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.instance.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data

            if (response?.status === 200 || response?.status === 201) {
                return response.data;
            }

            throw new Error(response.message)


        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });

    }

    interceptorMiddleware(func: any) {
        return func(undefined, undefined, this.instance);
    }
}

export default HttpService;