import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  concat,
  delay,
  forkJoin,
  interval,
  map,
  merge,
  Observable,
  zip,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiLocal = 'http://localhost:3000/users';
  private apiExterna = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) {}

  getUsersForkJoin(): Observable<any> {
    return forkJoin({
      apiLocal: this.http.get<any>(this.apiLocal),
      apiexterna: this.http.get<any>(this.apiExterna).pipe(delay(3000)),
    });
  }

  getUsersZip(): Observable<any> {
    return zip(
      this.http.get<any>(this.apiLocal),
      this.http.get<any>(this.apiExterna).pipe(delay(3000))
    );
  }

  getUsersMerge(): Observable<any> {
    const myInterval$ = interval(1000);

    return merge(
      myInterval$,
      this.http.get<any>(this.apiLocal),
      this.http.get<any>(this.apiExterna).pipe(delay(3000))
    );
  }

  getUsersConcat(): Observable<any> {
    const myInterval$ = interval(1000);

    return concat(
      myInterval$,
      this.http.get<any>(this.apiLocal),
      this.http.get<any>(this.apiExterna).pipe(delay(3000))
    );
  }

  getUsersMap(): Observable<any> {
    return this.http
      .get<any>(this.apiExterna)
      .pipe(map((res: any) => res?.title));
  }

  getUserSwitchMap(): Observable<any> {
    const url = 'http://localhost:3000/user';

    return this.http.get<any>(url);
  }

  getUserByCpf(id: number): Observable<any> {
    const params = new HttpParams().set('id', id);

    return this.http.get<any>(this.apiLocal, { params });
  }

  getUserByNameDebounceTime(name: string): Observable<any> {
    const params = { name: name };

    return this.http.get<any>(this.apiLocal, { params });
  }
}
