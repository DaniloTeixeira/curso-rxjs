import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss'],
})
export class FindIndexComponent implements OnInit {
  ngOnInit(): void {
    this.findIndexOperator();
  }

  private findIndexOperator(): void {
    const obsFamily = of('Danilo', 'Mariana', 'Marina');

    const daughterIndex = obsFamily.pipe(
      findIndex((name) => name === 'Marina')
    );

    daughterIndex.subscribe(console.log);
  }
}
