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

  destroyed$ = new Subject<void>();

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  /*
    Neste exemplo, estamos criando um Subject que emite valores do tipo number.
    Estamos nos inscrevendo no Subject após a emissão de dois números feita pelo método next(). Cada vez que um valor é emitido, o observador recebe o valor correspondente. Observe que o Subject só recebe os valores que foram emitidos após a sua inscrição.

  */
  onSubject(): void {
    const subject$ = new Subject<number>();

    subject$.next(1);
    subject$.next(2);

    subject$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((valueObs2) =>
        console.log(`Subject emitido após a inscrição: ${valueObs2}`)
      );

    subject$.next(3);
    subject$.next(4);
  }

  /*
    Neste exemplo, estamos criando um BehaviorSubject que emite valores do tipo number. Estamos definindo o valor inicial do BehaviorSubject como 0. Usando o método next, estamos emitindo o valor um, depois fazemos a incrição e em seguida fazemos a emissão de três valores: 2, 3 e 4. Então o BehaviorSubjec vai pegar o último valor emitido e todos os próximos, neste caso, ignorando o valor de inicialização que é o 0
  */
  onBehaviorSubject(): void {
    const behaviorSubject$ = new BehaviorSubject<number>(0);

    behaviorSubject$.next(0);
    behaviorSubject$.next(1);

    behaviorSubject$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => console.log(`BehaviorSubject: ${value}`));

    behaviorSubject$.next(2);
    behaviorSubject$.next(3);
    behaviorSubject$.next(4);
  }

  /*
    Neste exemplo, estamos criando um ReplaySubject que emite valores do tipo number. Estamos definindo o tamanho do buffer como 2. Cada vez que um valor é emitido, o observador recebe o valor correspondente, bem como os valores emitidos anteriormente, de acordo com o tamanho do buffer.
  */
  onReplaySubject(): void {
    const replaySubject$ = new ReplaySubject<number>(2);

    replaySubject$.next(1);
    replaySubject$.next(2);
    replaySubject$.next(3);
    replaySubject$.next(4);
    replaySubject$.next(5);

    replaySubject$.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      console.log(`ReplaySubject: ${value}`);
    });

    replaySubject$.next(6);
  }

  /*
    Neste exemplo, estamos criando um AsyncSubject que emite valores do tipo string. Estamos nos inscrevendo duas vezes, uma antes e outra depois de emitir os valores usando o método next(). Estamos completando o AsyncReplay com o método complete(). O subcriber do AsyncSubject recebe apenas o último valor emitido e apenas quando o Observable é completado.
   */
  onAsyncSubject(): void {
    const asyncSubject$ = new AsyncSubject<string>();

    asyncSubject$.next('Primeiro valor');
    asyncSubject$.next('Segundo valor');
    asyncSubject$.next('Terceiro valor');
    asyncSubject$.next('Quarto Valor');
    asyncSubject$.complete();

    asyncSubject$.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      console.log(`Último valor emitido pelo AsyncSubject: ${value}`);
    });
  }
}
