import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  concat,
  delay,
  forkJoin,
  interval,
  map,
  merge,
  Observable,
  of,
  retry,
  share,
  shareReplay,
  throwError,
  timeout,
  zip,
} from 'rxjs';
import { Todo } from '../interfaces/Todo';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiLocal = 'http://localhost:3000/users';
  private apiExterna = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) {}

  getUsersForkJoin(): Observable<{
    apiLocal: User;
    apiexterna: Todo;
  }> {
    return forkJoin({
      apiLocal: this.http.get<User>(this.apiLocal),
      apiexterna: this.http.get<Todo>(this.apiExterna).pipe(delay(3000)),
    });
  }

  getUsersZip(): Observable<[User, Todo]> {
    return zip(
      this.http.get<User>(this.apiLocal),
      this.http.get<Todo>(this.apiExterna).pipe(delay(3000))
    );
  }

  getUsersMerge(): Observable<number | User | Todo> {
    const myInterval$ = interval(1000);

    return merge(
      myInterval$,
      this.http.get<User>(this.apiLocal),
      this.http.get<Todo>(this.apiExterna).pipe(delay(3000))
    );
  }

  getUsersConcat(): Observable<number | User | Todo> {
    const myInterval$ = interval(1000);

    return concat(
      myInterval$,
      this.http.get<User>(this.apiLocal),
      this.http.get<Todo>(this.apiExterna).pipe(delay(3000))
    );
  }

  getUsersMap(): Observable<string> {
    return this.http.get<Todo>(this.apiExterna).pipe(map((res) => res?.title));
  }

  getUserSwitchMap(): Observable<User> {
    const url = 'http://localhost:3000/user';

    return this.http.get<User>(url);
  }

  getUserByCpf(id: number): Observable<User> {
    const params = new HttpParams().set('id', id);

    return this.http.get<User>(this.apiLocal, { params });
  }

  getUserByNameDebounceTime(name: string): Observable<User> {
    const params = { name: name };

    return this.http.get<User>(this.apiLocal, { params });
  }

  getUsersShareReplay(): Observable<User> {
    return this.http.get<User>(this.apiLocal).pipe(shareReplay(1));
  }

  getUsersShare(): Observable<User> {
    return this.http.get<User>(this.apiLocal).pipe(share());
  }

  getUsersCatchError(): Observable<string | User> {
    const wrongUrl = `${this.apiLocal}/wrong`;

    return this.http.get<User>(wrongUrl).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return of(
            'Ops! Não foi possível efetuar a requisição, contato o desenvolvedor'
          );
        }

        if (e.status === 401) {
          return of('Ops! Não autorizado');
        }

        if (e.status === 404) {
          return of('Ops! URL não encontrada');
        }

        if (e.status === 405) {
          return of('Ops! Método não permitido');
        }

        return throwError(() => e);
      }),
      retry(3)
    );
  }

  getUsersDelay(): Observable<User> {
    return this.http.get<User>(`${this.apiLocal}TESTE`).pipe(delay(2000));
  }

  getUsersTimeout(): Observable<User> {
    return this.http.get<User>(this.apiLocal).pipe(
      delay(5000),
      timeout(3000),
      catchError((e) => of('Ops! Aconteceu algo de errado', e))
    );
  }
}
