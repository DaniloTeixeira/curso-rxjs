import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit {
  ngOnInit(): void {
    this.combineLatestOperator();
  }

  private combineLatestOperator(): void {
    const timerOne$ = timer(1000, 4000);
    const timerTwo$ = timer(2000, 4000);
    const timerThree$ = timer(3000, 4000);

    combineLatest([timerOne$, timerTwo$, timerThree$]).subscribe(
      ([timerOne, timerTwo, timerThree]) => {
        console.log(
          `Último valor timerOne: ${timerOne}`,
          `Último valor timerTwo: ${timerTwo}`,
          `Último valor timerThree: ${timerThree}`
        );
      }
    );
  }
}
