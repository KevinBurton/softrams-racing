import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Member } from '../models/member';

import { EnvService } from '../services/env.service';

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    constructor(private http: HttpClient,
                private env: EnvService) {

    }
    public getMembers(): Observable<Member[]> {
        const url = `${this.env.apiBase}/api/members/`;
        return this.http.get<Member[]>(url).pipe(
            tap((data) => console.log(`Member List: ${data.length}`)),
            catchError(this.handleError)
        );
    }
    public getMemberById(id: string): Observable<Member> {
      const url = `${this.env.apiBase}/api/members/${id}`;
      return this.http.get<Member>(url).pipe(
          tap((data) => {
            console.log(`Member: ${data}`);
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
