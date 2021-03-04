import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
        
    }

    get(url: string) {
        return this.http.get(url);
    }

    post(url: string, data: string) {
        return this.http.post(url, data);
    }
}