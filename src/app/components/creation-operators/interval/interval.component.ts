import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  ngOnInit(): void {
    this.intervalOperator();
  }

  intervalOperator(): void {
    const obsNumber$ = interval(1000);

    const subscription$ = obsNumber$.subscribe(console.log);

    setTimeout(() => {
      subscription$.unsubscribe();
    }, 6000);
  }
}
