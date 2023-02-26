import { Component, OnInit } from '@angular/core';
import { fromEvent, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss'],
})
export class MapToComponent implements OnInit {
  ngOnInit(): void {
    this.mapToOperator();
  }

  private mapToOperator(): void {
    let clickCounter = 0;
    const click$ = fromEvent(document, 'click');

    // Método depreciado (Utilizar o operador map)
    const myMapTo$ = click$.pipe(mapTo('Clicou no DOM: '));

    // Fazendo a mesma coisa com o map
    // const myMapTo$ = click$.pipe(map(() => 'Clicou no DOM: '));

    myMapTo$.subscribe((res) => console.log(`${res} ${clickCounter++} vezes`));
  }
}
