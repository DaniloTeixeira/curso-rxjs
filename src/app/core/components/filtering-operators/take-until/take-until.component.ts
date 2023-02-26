import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements OnInit {
  ngOnInit(): void {
    this.takeUntilOperator();
  }

  private takeUntilOperator(): void {
    const myInterval$ = interval(1000);
    // myInterval$.pipe(takeUntil(timer(5000))).subscribe(console.log);

    const myInterval2$ = interval(1000);

    myInterval$
      .pipe(takeUntil(fromEvent(document, 'click')))
      .subscribe(console.log);
  }
}
