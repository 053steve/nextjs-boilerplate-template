import {AuthApiFactory, AuthRequest} from '../client';
import HttpService from './http.service';

class ApiService {

    httpService: HttpService;

    constructor() {
        this.httpService = new HttpService();
    }

    authService() {
        return this.httpService.interceptorMiddleware(AuthApiFactory);
    }
}

export default ApiService;