import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  ngOnInit(): void {
    this.filterOperator();
  }

  private filterOperator(): void {
    const obsArr$ = from([
      { name: 'Danilo', age: 36 },
      { name: 'Mariana', age: 31 },
      { name: 'Marina', age: 0 },
    ]);

    obsArr$.pipe(filter((obj) => obj.age > 18)).subscribe(console.log);
  }
}
