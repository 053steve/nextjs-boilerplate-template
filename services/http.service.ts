import axios from "axios";
import {requestInterceptor, responseInterceptor, errrorInterceptor} from '../middleware/interceptor';

class HttpService {

    public instance: any;

    constructor() {
        this.setupInstance();
    }

    setupInstance() {
        this.instance = axios.create();
        this.instance.interceptors.request.use(requestInterceptor, errrorInterceptor);
        this.instance.interceptors.response.use(responseInterceptor, errrorInterceptor);

    }

    interceptorMiddleware(func: any) {
        return func(undefined, undefined, this.instance);
    }
}

export default HttpService;