import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss'],
})
export class WithLatestFromComponent implements OnInit {
  ngOnInit(): void {
    this.withLatestFromOperator();
  }

  private withLatestFromOperator(): void {
    const clicks$ = fromEvent(document, 'click');
    const timer$ = interval(1000);

    clicks$.pipe(withLatestFrom(timer$)).subscribe(console.log);
  }
}
