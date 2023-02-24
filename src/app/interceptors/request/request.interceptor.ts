import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const { method, url } = request;

    console.log(`INTERCEPTOR -  METHOD: ${method} | URL: ${url}`);

    return next.handle(request).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 400) {
          console.log(
            e.message,
            'Ops! Não foi possível efetuar a requisição, contato o desenvolvedor'
          );
        }

        if (e.status === 401) {
          console.log(e.message, 'Ops! Não autorizado');
        }

        if (e.status === 404) {
          console.log(e.message, 'Ops! URL não encontrada');
        }

        if (e.status === 405) {
          console.log(e.message, 'Ops! Método não permitido');
        }

        return throwError(() => new Error(e.error));
      })
    );
  }
}
