import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck, tap } from 'rxjs/internal/operators';
import { query } from '@angular/animations';
import { Observable } from 'rxjs';
import { WikipediaResultInterface } from './wikipedia-result.interface';

@Injectable({
  providedIn: 'root'
})
export class WikipediaApiService {
  private api = 'https://ru.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsr';
  constructor(private http: HttpClient) {}

  search(term: string): Observable<WikipediaResultInterface[]> {
    return this.http.jsonp(
      `${this.api}limit=50&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='${term}`,
      'callback'
    ).pipe(
      pluck<any, WikipediaResultInterface[]>('query', 'pages'),
    );
  }
}
