import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  public _URL = 'http://localhost:8000/enroll';
  constructor(private http: HttpClient) { }
  enroll(user: User) {
    return this.http.post<any>(this._URL, user);
  }
}
