import { Component, OnInit } from '@angular/core';
import { from, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  ngOnInit(): void {
    this.takeOperator();
  }

  private takeOperator(): void {
    const obsArr$ = from([
      { name: 'Danilo', age: 36 },
      { name: 'Mariana', age: 31 },
      { name: 'Marina', age: 0 },
    ]);

    obsArr$
      .pipe(
        map(({ name }) => name),
        take(1)
      )
      .subscribe(console.log);
  }
}
