import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ImdbResponseInterface, ImdbResponseModel } from './imdb-response.model';
import { catchError, map, pluck, tap } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root',
})
export class ImdbApiService {
    private api = 'http://www.omdbapi.com/?apikey=3d055761';

    constructor(private http: HttpClient) {
    }

    search(term: string): Observable<ImdbResponseModel[]> {
        return this.http.get(
            `${this.api}&s=${term}`,
        ).pipe(
            pluck<any, ImdbResponseInterface[]>('Search'),
            map(res => ImdbResponseModel.mapImdbResponse(res)),
            catchError(() => of([])),
        );
    }
}
