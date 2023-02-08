import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit {
  ngOnInit(): void {
    this.fromOperator();
  }

  private fromOperator(): void {
    const obsArray$ = from([1, 2, 3, 4, 5]);
    const promise$ = from(new Promise((resolve) => resolve('Hello World!')));
    const obsStr$ = from('Hey!');

    obsArray$.subscribe(console.log);
    promise$.subscribe(console.log);
    obsStr$.subscribe(console.log);
  }
}
