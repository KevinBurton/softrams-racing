import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Team } from '../models/team';

import { EnvService } from '../services/env.service';

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    constructor(private http: HttpClient,
                private env: EnvService) {

    }
    public getTeams(): Observable<Team[]> {
        const url = `${this.env.apiBase}/api/teams/`;
        return this.http.get<Team[]>(url).pipe(
            tap((data) => console.log(`Team List: ${data.length}`)),
            catchError(this.handleError)
        );
    }
    public getTeamById(id: string): Observable<Team> {
      const url = `${this.env.apiBase}/api/products/${id}`;
      return this.http.get<Team>(url).pipe(
          tap((data) => {
            console.log(`Team: ${data}`);
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
