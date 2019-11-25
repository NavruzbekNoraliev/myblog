import { Injectable } from '@angular/core';
import { baseUrl } from './base';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StackOverflowService {
  relativeUrl: string;
  constructor(private http: HttpClient) { }

  getUserDetails(user = 'users/11468327/') {
    return this.http.get(`${baseUrl}${user}?site=stackoverflow`)
  }
}

