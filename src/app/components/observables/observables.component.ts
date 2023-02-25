import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements AfterViewInit {
  @ViewChild('btn') btn!: ElementRef;

  obsCompleted = false;

  ngAfterViewInit(): void {
    this.initObservable();
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
      buttonClick$.subscribe(() => {
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

    observable$.subscribe(console.log);
  }
}
