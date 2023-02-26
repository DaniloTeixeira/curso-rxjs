import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
    this.ofOperator();
  }

  private ofOperator(): void {
    const obsArray$ = of([1, 2, 3]);
    const obsStr$ = of('of de string');
    const obsAny$ = of({ nome: 'Danilo' }, true, function showName() {
      return 'Danilo';
    });

    obsArray$.subscribe(console.log);
    obsStr$.subscribe(console.log);
    obsAny$.subscribe(console.log);
  }
}
