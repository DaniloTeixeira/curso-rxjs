import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit, OnDestroy {
  @ViewChild('button') button!: ElementRef;

  destroyed$ = new Subject<void>();

  ngAfterViewInit(): void {
    this.fromEventOperator();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private fromEventOperator(): void {
    const obsDOMElement$ = fromEvent(this.button.nativeElement, 'click');

    obsDOMElement$.pipe(takeUntil(this.destroyed$)).subscribe(console.log);
  }
}
