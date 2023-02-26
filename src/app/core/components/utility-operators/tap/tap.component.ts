import { Component, OnInit } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  ngOnInit(): void {
    this.tapOperator();
  }

  private tapOperator(): void {
    const obsArray = of([
      {
        id: 1,
        name: 'Danilo',
        age: 36,
      },
      {
        id: 1,
        name: 'Danilo',
        age: 36,
      },
    ]);

    obsArray.pipe(tap((obj) => console.log(obj))).subscribe();
  }
}
