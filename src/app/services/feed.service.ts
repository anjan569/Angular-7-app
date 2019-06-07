import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {
    constructor(private http: HttpClient) {}

    getDateFromMultipleSources(): Observable<any[]> {
        let albumsResponse = this.http.get('https://jsonplaceholder.typicode.com/albums');
        let photosResponse = this.http.get('https://jsonplaceholder.typicode.com/photos');
        let todoResponse = this.http.get('https://jsonplaceholder.typicode.com/todos');
        let postsResponse = this.http.get('https://jsonplaceholder.typicode.com/posts');
        let commentsResponse = this.http.get('https://jsonplaceholder.typicode.com/comments');
        
        return forkJoin([albumsResponse,photosResponse,todoResponse,postsResponse,commentsResponse]);
    }
}
