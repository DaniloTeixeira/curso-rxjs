import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss'],
})
export class StartWithComponent implements OnInit {
  ngOnInit(): void {
    this.startWithOperator();
  }

  private startWithOperator(): void {
    const values$ = of(1, 2, 3);

    values$.pipe(startWith(0)).subscribe(console.log);
  }
}
