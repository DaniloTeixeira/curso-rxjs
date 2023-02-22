import { Component, OnInit } from '@angular/core';
import { interval, mergeMap, of, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  ngOnInit(): void {
    this.retryOperator();
  }

  private retryOperator(): void {
    const myInterval$ = interval(1000);

    const example$ = myInterval$.pipe(
      mergeMap((value) => {
        if (value > 2) {
          return throwError(() => new Error('ERRO!'));
        }

        return of(value);
      }),
      retry(2)
    );

    example$.subscribe({
      next: (value) => console.log(value),
      error: () => console.log('Requisição tentada novamente +2 vezes'),
    });
  }
}
