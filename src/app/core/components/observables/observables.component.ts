import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('btn') btn!: ElementRef;

  obsCompleted = false;

  destroyed = new Subject<void>();

  ngAfterViewInit(): void {
    this.initObservable();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get label(): string {
    return this.obsCompleted
      ? 'Observable foi completado'
      : 'Gerar número aleatório no console';
  }

  reloadPage(): void {
    window.location.reload();
  }

  private initObservable(): void {
    const buttonClick$ = fromEvent(this.btn.nativeElement, 'click');

    const observable$ = new Observable((observer) => {
      buttonClick$.pipe(takeUntil(this.destroyed)).subscribe(() => {
        const randomNumber = Math.trunc(Math.random() * 100);

        if (randomNumber <= 80) {
          observer.next(`Valor do randomNumber: ${randomNumber}`);
          return;
        }

        observer.complete();
        console.log('Completou pois o randomNumber é maior que 80');
        this.obsCompleted = true;
      });
    });

    observable$.pipe(takeUntil(this.destroyed)).subscribe(console.log);
  }
}
