import { Component, OnInit } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  ngOnInit(): void {
    this.timerOperator();
  }

  private timerOperator(): void {
    const obsValues$ = of(1, 2, 3);

    timer(3000)
      .pipe(concatMap(() => obsValues$))
      .subscribe(console.log);
  }
}
