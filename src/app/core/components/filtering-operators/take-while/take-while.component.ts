import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss'],
})
export class TakeWhileComponent implements OnInit {
  ngOnInit(): void {
    this.takeWhileOperator();
  }

  private takeWhileOperator(): void {
    const myInterval$ = interval(1000);

    myInterval$.pipe(takeWhile((value) => value < 5)).subscribe(console.log);
  }
}
