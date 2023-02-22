import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss'],
})
export class EveryComponent implements OnInit {
  ngOnInit(): void {
    this.everyOperator();
  }

  private everyOperator(): void {
    const obsValues = of(1, 2, 3, 4, 5);

    const allEven = obsValues.pipe(every((value) => value % 2 === 0));

    allEven.subscribe(console.log);
  }
}
