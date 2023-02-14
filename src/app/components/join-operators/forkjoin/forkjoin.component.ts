import { Component, OnInit } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss'],
})
export class ForkjoinComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.forkJoinOperator();
    this.getUsers();
  }
  // O forkJoin só exibe o valor quando todos os observables tiverem emitido pelo menos um valor
  private forkJoinOperator(): void {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'),
    });

    // http$.subscribe((res) => console.log(res));

    const httpMulti$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(3000),
      promise: Promise.resolve(10),
    });

    // httpMulti$.subscribe((res) => console.log(res));
  }

  private getUsers(): void {
    this.apiService.getUsersForkJoin().subscribe(console.log);
  }
}
