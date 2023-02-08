import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit {
  ngOnInit(): void {
    this.initObservable();
  }

  private initObservable(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('Danilo');
      subscriber.next(true);
      subscriber.complete();
    });

    // observable.subscribe({
    //   next: (response) => console.log(`Observer response value: ${response}`),
    //   error: (err) => console.log(`Observer error: ${err}`),
    //   complete: () => console.log('Observer complete'),
    // });

    const observer = {
      next: (response: any) =>
        console.log(`Observer response value: ${response}`),
    };

    observer.next('Valor passado pelo método next()');

    const subscription = observable.subscribe(observer);
    const subscription2 = interval(1000).subscribe(console.log);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000);

    subscription.unsubscribe();
  }
}
