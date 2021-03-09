import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {User} from './user';
import {catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  public _URL = 'http://localhost:8000/enroll';
  constructor(private http: HttpClient) { }
  enroll(user: User) {
    return this.http.post<any>(this._URL, user).pipe(
      catchError(this.errorHandler)
  );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
