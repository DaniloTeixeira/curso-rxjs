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

  behaviorSubject$ = new BehaviorSubject<number>(0);

  destroyed$ = new Subject<void>();

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  /*
    Neste exemplo, estamos criando um Subject que emite valores do tipo number.
    Estamos nos inscrevendo no Subject duas vezes, uma antes e outra depois de emitir o valor 1 usando o método next. Cada vez que um valor é emitido, os observadores recebem o valor correspondente.

    Observe que o primeiro observador recebeu os valores 1 e 2, enquanto o segundo observador só recebeu o valor 2.
  */
  onSubject(): void {
    this.subject$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((valueObs1) =>
        console.log(`Observer Subject 1 tem acesso ao valor: ${valueObs1}`)
      );

    this.subject$.next(1);

    this.subject$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((valueObs2) =>
        console.log(`Observer Subject 2 tem acesso ao valor: ${valueObs2}`)
      );

    this.subject$.next(2);
  }

  /*
    Neste exemplo, estamos criando um BehaviorSubject que emite valores do tipo number. Estamos definindo o valor inicial do BehaviorSubject como 0. Usando o método next, estamos emitindo o valor um, depois fazemos a incrição e em seguida fazemos a emissão de três valores: 2, 3 e 4. Então o BehaviorSubjec vai pegar o último valor emitido e todos os próximos, neste caso, ignorando o valor de inicialização que é o 0
  */
  onBehaviorSubject(): void {
    this.behaviorSubject$.next(1);

    this.behaviorSubject$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(console.log);

    this.behaviorSubject$.next(2);
    this.behaviorSubject$.next(3);
    this.behaviorSubject$.next(4);
  }
}
