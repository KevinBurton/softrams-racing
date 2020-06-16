import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { User } from '../models/user';

import { EnvService } from '../services/env.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient,
                private env: EnvService) {

    }
    public getUsers(): Observable<User[]> {
        const url = `${this.env.apiBase}/api/users/`;
        return this.http.get<User[]>(url).pipe(
            tap((data) => {
              console.log(`User List: ${data.length}`);
            }),
            catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse): ObservableInput<any> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
