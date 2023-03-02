import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('btnStart') btnStart!: ElementRef;
  @ViewChild('btnStop') btnStop!: ElementRef;

  destroyed$ = new Subject<void>();

  ngAfterViewInit(): void {
    this.intervalOperator();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  intervalOperator(): void {
    const startButton$ = fromEvent(this.btnStart.nativeElement, 'click');
    const stopButton$ = fromEvent(this.btnStop.nativeElement, 'click');

    startButton$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      const interval$ = interval(1000).pipe(takeUntil(stopButton$));

      interval$.subscribe((value) =>
        console.log(`Valor do interval: ${value}`)
      );
    });

    stopButton$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => console.log('Interval finalizado'));
  }
}
