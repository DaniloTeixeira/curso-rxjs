import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss'],
})
export class ThrowErrorComponent implements OnInit {
  ngOnInit(): void {
    this.throwErrorOperator();
  }

  private throwErrorOperator(): void {
    const obsError$ = throwError(
      () => new Error('Ops! Algo de errado não está certo')
    );

    obsError$.subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('Obs completou!'),
    });
  }
}
