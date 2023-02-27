import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  AsyncSubject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  @ViewChild('subjectBtn') subjectBtn!: ElementRef;

  subject$ = new Subject<number>();

  destroyed$ = new Subject<void>();

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  /*
   Neste exemplo, estamos criando um Subject que emite valores do tipo number.
   Estamos nos inscrevendo no Subject duas vezes, uma antes e outra depois de emitir o valor 1 usando o método next. Cada vez que um valor é emitido, os observadores recebem o valor correspondente.
 */

  onSubject(): void {
    this.subject$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((valueObs1) =>
        console.log(`Observer 1 tem acesso ao valor: ${valueObs1}`)
      );

    this.subject$.next(1);

    this.subject$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((valueObs2) =>
        console.log(`Observer 2 tem acesso ao valor: ${valueObs2}`)
      );

    this.subject$.next(2);
  }
}
