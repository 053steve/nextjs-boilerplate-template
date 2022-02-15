import {AuthApiFactory, AuthRequest, UserApiFactory, UserApiAxiosParamCreator} from '../client';
import HttpService from './http.service';

class ApiService {

    httpService: HttpService;

    constructor() {
        this.httpService = new HttpService();
    }

    authService() {
        return this.httpService.interceptorMiddleware(AuthApiFactory);
    }

    async userService() {
        const service = await this.httpService.apply(UserApiFactory, UserApiAxiosParamCreator);
        // const creator = await UserApiAxiosParamCreator();
        // const result = await creator.getAllUsers();
        // console.log(result);
        console.log(service);
        return service;
        // return this.httpService.interceptorMiddleware(UserApiFactory);

    }
}

export default ApiService;