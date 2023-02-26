import { Component, OnInit } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent implements OnInit {
  ngOnInit(): void {
    this.findOperator();
  }

  private findOperator(): void {
    const obsNumbers = of(0, 1, 2, 3, 4, 5);

    const firstOddNumber = obsNumbers.pipe(find((number) => number % 2 !== 0));

    firstOddNumber.subscribe(console.log);
  }
}
