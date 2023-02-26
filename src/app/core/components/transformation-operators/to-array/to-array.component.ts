import { Component, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  ngOnInit(): void {
    this.getUserToArray();
  }

  private getUserToArray(): void {
    const user$ = of({ id: 1, name: 'Danilo' });

    user$.pipe(toArray()).subscribe(console.log);
  }
}
