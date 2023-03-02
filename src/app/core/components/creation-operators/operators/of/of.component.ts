import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  fromEvent,
  interval,
  of,
  Subject,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent implements AfterViewInit, OnDestroy {
  @ViewChild('btn') btn!: ElementRef;

  destroyed$ = new Subject<void>();

  ngAfterViewInit() {
    this.ofOperator();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private ofOperator(): void {
    const buttonClick$ = fromEvent(this.btn.nativeElement, 'click');
    const obsArray$ = of([0]);
    let counter = 1;

    buttonClick$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      obsArray$.subscribe((value) => {
        value.push(counter);
        console.log('Inserindo elemento em of de array: ', value);

        counter++;
      });
    });
  }
}
