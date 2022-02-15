import axios from "axios";
import {requestInterceptor, responseInterceptor, errrorInterceptor} from '../middleware/interceptor';


class HttpService {

    instance: any;

    constructor() {
        this.setupInstance();
    }

    setupInstance() {
        this.instance = axios.create();

        this.instance.interceptors.request.use(requestInterceptor, errrorInterceptor);
        this.instance.interceptors.response.use(responseInterceptor, errrorInterceptor);

    }

    async apply(factory, paramCreator) {
        // set modified axios instance into api generator
        factory = this.interceptorMiddleware(factory);
        // factory = await this.applySWRAdaptor(factory, paramCreator);
        return factory;
    }

    interceptorMiddleware(factory) {
        // set modified axios instance into api generator
        return factory(undefined, undefined, this.instance);
    }

    async applySWRAdaptor(factory, paramCreator) {
        // apply swr adaptor
        const allparamCreatorInstance = paramCreator();


        for (const [key, value] of Object.entries(allparamCreatorInstance)) {
            // const matchedInstance = allparamCreatorInstance[key];
            // console.log(matchedInstance());
            // const result = matchedInstance();
            // console.log(result);
            console.log(`${key}: ${value}`);
        }


    }
}

export default HttpService;