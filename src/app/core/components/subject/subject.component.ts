import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    this.initSubject();
  }

  private initSubject(): void {
    /* Observable que não necessita de um valor para ser iniciado */
    const subject = new Subject<number>();

    subject.subscribe({
      next: (value) => console.log(value),
    });

    subject.next(10);

    /* Obervable que precisa de um valor quando é iniciado e emite o valor atual aos novos incritos */
    const behaviorSubject = new BehaviorSubject(0);

    behaviorSubject.next(999);
    behaviorSubject.next(888);
    behaviorSubject.next(777);

    /* O subscriber receberá apenas o último valor emitido */
    behaviorSubject.subscribe({
      next: (value) => console.log(value),
    });

    /* Não necessita de valor inicial e emite os últimos 3 valores para os novos inscritos */
    const replaysubject = new ReplaySubject();

    replaysubject.subscribe(console.log);

    replaysubject.next(1);
    replaysubject.next(2);
    replaysubject.next(3);
    replaysubject.next(4);
  }
}
